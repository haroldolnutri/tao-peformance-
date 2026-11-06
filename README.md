# TÃO Performance

Landing page estática de consultoria de Nutrição Esportiva e Educação Física. HTML, CSS e JavaScript, sem instalação de dependências ou etapa de compilação.

## Estrutura

- `index.html`: página principal e metadados.
- `assets/css/styles.css`: estilos e responsividade.
- `assets/js/config.js`: textos, contatos, profissionais e planos.
- `assets/js/brand.js`: logomarca original incorporada em base64.
- `assets/js/app.js`: renderização e interações.

## Visualizar localmente

Na pasta do projeto, execute `python3 -m http.server 8000` e abra http://localhost:8000.

## Personalizar antes de divulgar

Edite `assets/js/config.js`. O arquivo original contém dados demonstrativos: WhatsApp `5500000000000`, e-mail, Instagram, nomes e registros dos profissionais, além dos links de privacidade e termos. Substitua-os pelos dados reais. Os preços estão sob consulta; use um número em `valor` para exibir preço em reais.

Não coloque senhas, tokens ou informações privadas nos arquivos: todo conteúdo do site é público.

## Publicar no GitHub Pages

Em Settings → Pages, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** e salve. O endereço esperado será https://haroldolnutri.github.io/tao-peformance-/ após a publicação ser concluída pelo GitHub.

Os caminhos relativos permitem hospedar tanto na raiz quanto em uma subpasta. As fontes Google exigem conexão com a internet; fontes do sistema são usadas como alternativa.
