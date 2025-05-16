import PlaceholderImage from './placeholders';

export { PlaceholderImage };

// URL base para acessar o logo do TutorTime
export const logoUrl = '/TutorTimeMainLogo.png';

// Função para criar dataURLs para placeholders como alternativa às imagens
export const createPlaceholder = (
    width: number,
    height: number,
    text: string = '',
    bgColor: string = '#222230',
    textColor: string = '#ffffff'
): string => {
    // Criamos uma função que será executada no cliente para gerar o canvas
    const generateCanvas = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (ctx) {
            // Desenhar background
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);

            // Desenhar texto
            if (text) {
                ctx.fillStyle = textColor;
                ctx.font = `${Math.max(
                    12,
                    Math.floor(width / 20)
                )}px sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                // Se o texto for longo, quebra em linhas
                const words = text.split(' ');
                const lines = [];
                let currentLine = words[0];

                for (let i = 1; i < words.length; i++) {
                    const testLine = currentLine + ' ' + words[i];
                    const metrics = ctx.measureText(testLine);
                    if (metrics.width > width - 20) {
                        lines.push(currentLine);
                        currentLine = words[i];
                    } else {
                        currentLine = testLine;
                    }
                }
                lines.push(currentLine);

                // Desenha as linhas centralizadas
                const lineHeight = Math.floor(width / 20);
                const y = height / 2 - ((lines.length - 1) * lineHeight) / 2;

                for (let i = 0; i < lines.length; i++) {
                    ctx.fillText(lines[i], width / 2, y + i * lineHeight);
                }
            }

            return canvas.toDataURL('image/png');
        }

        return '';
    };

    // Se estamos no lado do cliente, gera o canvas
    if (typeof document !== 'undefined') {
        return generateCanvas();
    }

    // Fallback para SSR onde não existe document/canvas
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23${bgColor.replace(
        '#',
        ''
    )}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='${Math.max(
        12,
        Math.floor(width / 20)
    )}' fill='%23${textColor.replace('#', '')}'%3E${encodeURIComponent(
        text
    )}%3C/text%3E%3C/svg%3E`;
};

// Função que gera um fallback para a imagem
export const getImageFallback = (
    width: number,
    height: number,
    text: string = 'Imagem Indisponível'
): string => {
    // Ao invés de retornar o data URL diretamente, retornamos uma função que será executada
    // apenas quando a imagem original falhar ao carregar
    return `
    this.onerror=null;
    const canvas = document.createElement('canvas');
    canvas.width = ${width};
    canvas.height = ${height};
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#222230';
      ctx.fillRect(0, 0, ${width}, ${height});
      ctx.fillStyle = '#ffffff';
      ctx.font = '${Math.max(12, Math.floor(width / 20))}px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('${text}', ${width / 2}, ${height / 2});
    }
    this.src = canvas.toDataURL('image/png');
  `;
};
