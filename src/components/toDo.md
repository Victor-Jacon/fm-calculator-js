### Finish styling - Feito

### Break into smaller components - Feito
-StyledTipForm
    Pass through props (5,10,15,25,50)

### Feito:
-A função que executa o cálculo da conta com a gorjeta será executada no clique de um botão , pra vermos se o resultado está ok.

-Se o resultado der ok:
A tip é 10%. Se marcarmos 50%, o resultado continua dando certo?
Testar todos os input radios.

Depois disso, ativar a função de handleBill por useEffect (se mudar o valor total da conta, a gorjeta, ou o numero de pessoas, vai REEXECUTAR A FUNÇÃO QUE CALCULA A GORJETA - HANDLE TOTAL BILL)

### Lógica - Parte 1
✅ O customTipOption não está funcionando na hora de calcular. (Do 5 ao 50 funciona de boas. Mas ao colocar uma gorjeta manualmente não funciona)

✅ Configurar a lógica do botão RESET (apagar todos os campos que o useEffect do localStorage está assistindo)

✅ Configurar botão reset para apagar dados do CustomTipText

### Depois que tudo estiver ok [ Lógica - Parte 2 ]
✅-Ativar ao colocar o valor da conta (bill)
✅-Ativar a função de cálculo ao selecionar outra gorjeta (tip)
✅-Ativar a função de calculo ao selecionar gorjeta custom (CustomTip)
✅-Ativar ao mudar o número de pessoas (people)
✅-Remover botões de debug
✅-Precisa aparecer Can't be zero em texto vermelho
    ✅-Este warning aparece se people = 0 (renderização condicional)
    ✅-Converter variavel people para number para a logica conseguir pegar. 
    ✅-alinhar o warning com a largura do input numberOfPeople
✅-Quando der hover (input ou label): o background color precisa ficar clarinho

### Responsivo
-Fazer a versão desktop:
-DE 3x3, será 2x3 (tip-container)
-De 1 coluna unica de card, card terá 2 colunas

### Escrever testes do jest
-Tipo
-QA diverso

### ContextAPI : Colocar switch (modo escuro / modo normal)
O modo normal é o design já está feito
O modo escuro é o design que irei criar