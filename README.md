# Challenge Decodificador de Texto - Formação T7 - ONE

As "chaves" de criptografia utilizadas são:<br/>
A letra "e" é convertida para "enter"<br/>
A letra "i" é convertida para "imes"<br/>
A letra "a" é convertida para "ai"<br/>
A letra "o" é convertida para "ober"<br/>
A letra "u" é convertida para "ufat"<br/>

Por exemplo:<br/>
"gato" => "gaitober"<br/>
gaitober" => "gato"<br/>

- É possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original (sem letras maiúsculas e/ou acentos).<br/>

A página tem campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve pode escolher entre as duas opções.
O resultado é ser exibido na tela e pode ser copiado pela ação do botão "Copiar".<br/>

Funcionalidades adicionais desenvolvidas:<br/>
- Pra melhorar a experiência, caracteres com acentuação e em letra maiúsculas são substituídos por caracteres válidos ao invés de serem removidos. Ex: ã -> a, A -> a, Á -> a;
- Animações nos botões para melhorar a experiência do usuário;
- Mensagem de feedback informando que o texto foi copiado;
- Design responsivo.