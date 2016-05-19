Turing Machine (Compiladores, 2014/2015 2S)
===========================================

[Live Preview](http://edualm.github.io/COMP-Turing-Machine-Web-App/)

Identificação dos Autores:
--------------------------

**Grupo**: G53

**Tema**: JavaScript Turing Machine

**Membros**:

	 - Eduardo Almeida – 201204989 - ei12018@fe.up.pt
	 - João Almeida – 201206113 - ei12053@fe.up.pt
	 - Miguel Fernandes – 201105565 - ei12137@fe.up.pt
	 - Pedro Santiago – 201201737 - ei12044@fe.up.pt


Instruções de Compilação
------------------------

Tendo sido o trabalho desenvolvido completamente em JavaScript, não é necessário qualquer tipo de (re)compilação após efetuar alterações ao código-fonte.

No caso de serem efetuadas modificações à gramática, é necessário compilá-la para JavaScript com o seguinte comando:

	antlr4 -Dlanguage=JavaScript TuringMachine.g4

E colocar os ficheiros resultantes da compilação na pasta `grammar`, não substituindo o ficheiro `TuringMachineListener.js`.

No caso de serem efetuadas modificações extensivas, poderá ser necessário efetuaar modificações no ficheiro `TuringMachineListener.js`.


Descrição dos Exemplos
----------------------

Os exemplos estão incluídos na Web IDE, e é possível aceder aos mesmos a partir da sua interface.

Cada um dos exemplos incluí uma descrição no topo do ficheiro.

Estão incluídos 5 exemplos funcionais e 3 exemplos que demonstram a deteção de erros.


Descrição de Utilização
-----------------------

Para utilizar a aplicação web é apenas necessário colocá-la num servidor web e apontar o browser para o endereço do mesmo.

Aí, o utilizador poderá desenvolver o seu código na interface web, podendo validá-lo / depurá-lo / executá-lo sem sair do browser.


Análise Lexical
---------------

O analisador lexical está localizado em `grammar/TuringMachineLexer.js`.

Quando o ficheiro de entrada contém erros lexicais, é lançada uma exceção e o utilizador é alertado deste facto utilizando uma `modal view` do Bootstrap, sendo a compilação parada.


Análise Sintática
-----------------

O analisador sintático está localizado em `grammar/TuringMachineParser.js`.

Quando o ficheiro de entrada contém erros lexicais, é lançada uma exceção e o utilizador é alertado deste facto utilizando uma `modal view` do Bootstrap, sendo a compilação parada.


Análise Semântica
-----------------

O analisador sintático está localizado em `js/machine.js`.

São implementadas as seguintes validações:

 - Missing State - Impede a tentativa de efetuar um salto para um estado não existente.
 - Missing Start State - Impede a tentativa de execução de uma máquina com um estado inicial indefinido.
 - Duplicate State - Impede a criação de dois estados com o mesmo nome.

Quando o ficheiro de entrada contém erros semânticos, é lançada uma exceção e o utilizador é alertado deste facto utilizando uma `modal view` do Bootstrap, sendo a compilação parada.


Representação(ões) Intermédia(s)
--------------------------------

Cada "tuplo" tem uma representação em JavaScript:

	function Tuple(cs, nsy, d, nst) {
		this.currentSymbol = cs;
		this.nextSymbol = nsy;
		this.direction = d;
		this.nextState = nst;
	}

Assim como cada "estado" (conjunto de "tuplos"):

	function State(stateName) {
		this.name = stateName;
		this.tuples = [];
	}

E, finalmente, a máquina propriamente dita:

	function Machine(it, s, ss) {
		this.inputTape = new Tape(it);
		this.states = s;
		this.startState = ss;
	}


Geração de Código 
-----------------

Não existe uma geração de código - o código é desenvolvido e interpretado dentro de uma Web IDE incluída no projeto, desenvolvida pelo grupo.


Testes
------

Não foram desenvolvidos quaisquer testes.

No entanto, e para compensar esta situação, validou-se a aplicação com 5 exemplos de código adaptados de uma outra máquina de turing também desenvolvida em JavaScript.


Arquitetura
-----------

A aplicação corre totalmente dentro de um browser, não sendo necessária a instalação de qualquer software adicional.

São utilizadas as seguintes bibliotecas:

 - ANTLR 4.5 (JavaScript Runtime)
 - Ace Editor
 - Bootstrap 3.3

**Linguagem de Entrada**

	[<current state>] {
		<current symbol> <new symbol> <direction> <new state>
		<current symbol> <new symbol> <direction> <new state>
		...
	}

	...

Em que:

 - Current State: Nome do estado atual.
	 - Tem de começar por uma letra, e pode conter tanto números como letras.
 - Current Symbol: Símbolo onde a cabeça da máquina se encontra.
	 - Qualquer carater alfanumérico.
 - New Symbol: Símbolo a ser substituído no local onde a cabeça da máquina se encontra.
	 - Qualquer carater alfanumérico.
 - Direction: Direção para a qual a cabeça da máquina se moverá.
	 - `l` - Esquerda (Left).
	 - `r` - Direita (Right).
	 - `*` - Não mexer.
 - New State: Estado a processar.
	 - Tem de ser um estado existente, definido em `current state`.

O estado inicial é sempre designado de `s0` e necessita de estar definido.


**Output**

A máquina de turing propriamente dita foi implementada totalmente em JavaScript pelo grupo, sendo o programa executado dentro do browser, e a resposta retornada no mesmo. Não são gerados quaisquer ficheiros "compilados" para exportação, dado que a máquina de turing é interpretada no browser.


Pontos Positivos
----------------

Para além de todos os pontos pedidos, a aplicação web fornece uma IDE com todas as funcionalidades necessárias ao desenvolvimento de código para a linguagem:

 - Funcionalidades I/O (New/Open/Save)
 - Validação, Depuração e Execução de Código
 - Exemplos para ajudar a perceber melhor a linguagem.


Pontos Negativos
----------------

De forma a melhorar o funcionamento da aplicação, seria positivo melhorar o sistema de execução de código, já que este não deteta loops infinitos, podendo tornar o browser irresponsivo se tal acontecer.
