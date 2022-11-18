# Genius

![preview_image.png](./github/preview_image.png)

[Clique aqui para acessar](https://fabiocosta123.github.io/jogo-genius/)

Jogo que aguça a memória. O objetivo é repetir a sequência dada pelo jogo.

Você já jogou Genius?

Genius era um brinquedo muito popular na década de 1980. Distribuído pela Estrela, o brinquedo buscava estimular a memorização de cores e sons. Com um formato semelhante a um OVNI, possuía botões coloridos que emitiam sons harmônicos e se iluminavam em sequência. Cabia aos jogadores repetir o processo sem errar.

> DOM game é um jogo feito exclusivamente com o DOM, sem canvas e sem flash. Eles são essencialmente construídos como páginas da web, onde DIVs são elementos de jogo estilizados com folhas de estilo CSS e os elementos são animados usando javascript. O objetivo nesse projeto é aprender como criar jogo com javascript para iniciantes.

Projeto inspirado pelo Inkasa Dev (recomendo)

> > O esqueleto do projeto (index), foi divido em 5 blocos (div).</br>
> > 1º div contém o game pad, </br>
> > 2º div contém título, contador,</br>
> > 3º div contém botão de start,</br>
> > 4º div contém botão de strich,</br>
> > 5º div contém botão de ON/OFF

> > A interação do jogador com o jogo, é armazenada em um array de objetos e comparado com a sequencia dada pelo computador, sequencia criada através de metodo randômico (Math.floor) e (Math.random)</br>

Para jogar é bem simples. </br>
1º Ligar o jogo (botão ON).</br>
2º O computador irá iniciar ao acender um dos led's do jogo.</br></br>
Após 3 segundos do término da sequência do computador, o "pad" ficará "clicável" para o jogador, e após 5 segundos sem resposta do jogador, o computador repete a sequência. Para cada sequência correta, o contador aumenta mais 1, e após 20 sequências correta o jogo é finalizado. </br> </br>
3º Jogador deverá repetir a sequência proposta. Ao errar a sequência, o contador volta a zero, se acertar, o contador aumenta mais 1.</br>

# Botão Strich</br>

> Aumenta a dificultade do jogo, fazendo com que após 5 segundos sem resposta do jogador para a sequência proposta, o contador volta a zero.
