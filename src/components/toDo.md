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
-O customTipOption não está funcionando na hora de calcular. (Do 5 ao 50 funciona de boas. Mas ao colocar uma gorjeta manualmente não funciona)

-Configurar a lógica do botão RESET (apagar todos os campos que o useEffect do localStorage está assistindo)

-Configurar botão reset para apagar dados do CustomTipText

### Depois que tudo estiver ok [ Lógica - Parte 2 ]
1-Ativar a função de cálculo no useEffect (Ao selecionar outra gorjeta)
2-Ativar ao colocar o valor da conta
3-Ativar ao mudar o número de pessoas

-Remover botão calcular (feito manualmente)

### Responsivo
-Fazer a versão desktop:
-DE 3x3, será 2x3 (tip-container)
-De 1 coluna unica de card, card terá 2 colunas