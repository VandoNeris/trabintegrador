INTRODUÇÃO

Este trabalho tem como objetivo apresentar a primeira etapa do projeto Integrador, que consiste em escolher e apresentar uma empresa selecionada, descrevendo a área de atuação da mesma nome e outras informações relevantes, elaborar e apresentar uma entrevista feita com 2 funcionários dessa empresa de setores diferentes abordando a visão de cada um sobre seu negócio e explorando as diferentes necessidades, dificuldades e atuações em ramos diferentes dentro da mesma empresa, com base nisso descrever o funcionamento interno da empresa como funcionam seus processos, tomadas de decisões, colaborações e outros, e com isso identificar problemas e desafios encontrados dentro do seus sistemas e assim propor um sistema otimizado para atender todas as necessidades e expectativas da empresa.

NOCS SOLUÇÕES

1.1. Apresentação da Empresa 

	A empresa escolhida foi a NOCS SOLUÇÕES, criada em 2020 na cidade de Vitória - Espírito Santo, por Yrui Giovan Neris e Pablo Marciano, que tem como objetivo desenvolver soluções para reduzir o desperdício de recursos, sendo o principal deles, a energia elétrica. 	Atualmente, a empresa atua com indústrias e casas, que são alvos com grande potencial de desperdiçar energia. Nesse ramo, a NOCS SOLUÇÕES oferece sistemas em que sua principal função é coletar dados a respeito de geração de energia, assim podendo analisar as informações coletadas e identificar anomalias e então evitar o desperdício de recursos. A empresa tem grande potencial de se destacar no mercado e evoluir devido às suas soluções que tratam um problema que afeta o mundo todo. Com o crescimento da demanda por energias limpas e economia, este mercado tende a expandir, e a NOCS SOLUÇÕES está preparada para crescer junto com ele, aprimorando seus serviços, buscando cada vez mais aumentar o número de clientes e criando novas soluções para ampliar as maneiras de economizar recursos.


1.2. NOME DA(S) PESSOA(S) ENTREVISTADA(s) E FUNÇÃO/CARGO

Sobre a entrevista: A fim de obter uma visão abrangente sobre o funcionamento da empresa e suas necessidades, foi realizada uma entrevista com dois funcionários da empresa, com o objetivo de entender o funcionamento interno da organização, desde a estruturação dos processos até as tomadas de decisões e a criação de soluções. Para obter uma visão mais abrangente e diversificada, foram entrevistados colaboradores de dois setores diferentes, permitindo assim a coleta de diferentes perspectivas sobre a mesma empresa. Essa abordagem proporciona uma compreensão mais rica das dinâmicas internas e dos desafios enfrentados por diferentes áreas da NOCS SOLUÇÕES.

Nome do entrevistado 1: Yrui Giovan Neris.
Função/Cargo: Sócio Administrador da parte de Software.
Nome do entrevistado 2: Pablo Marciano.
Função/Cargo: Sócio Administrador da parte de Hardware, e Financeiro.


1.3. Descrição do Funcionamento da Empresa
	A empresa funciona como qualquer outra, com cargos e setores diferentes cada um responsável por uma coisa dentro da empresa, existem programadores, pessoas responsáveis pelas finanças, pessoas responsáveis pelas reuniões e tomadas de decisões, entre outros cargos, os principais colaboradores da empresa são os entrevistados que são sócios tendo a empresa em conjunto, responsáveis pelas tomadas de decisões e inovações, tendo em vista que são eles os criadores da empresa vale ressaltar que tudo o que já foi desenvolvido desde a criação até os dias de hoje passou pela análise e decisões dos mesmos, as decisões são tomadas em conjunto um auxiliando o outro e conversando até entrarem em um consenso .
	A criação de novos sistemas e serviços surge na demanda dos clientes e na busca de inovação da empresa, assim como criam sistemas personalizados para alguns clientes estão sempre buscando ideias de inovação e possíveis melhorias para a empresa, nessas buscas surgem novas ideias de sistemas e serviços que são colocados em prática ou não.
	Explicação sobre como funciona a venda para o cliente:
Primeiro ocorre a conversa com o cliente, e é mandado para ele um questionário.

Após a conversa com o cliente, é feito uma definição de escopo feito pela empresa, para se prevenir de problemas futuros caso ocorra reclamações referentes ao que foi pedido e entregue, o escopo serve como uma “prova”.

Após assinarem o escopo, a empresa parte para as atividades, então os sócios entram em contato com os desenvolvedores e utilizam o seguinte documento como método, que é enviado para o desenvolvedor que interpreta, realiza as atividades e retorna o documento com atualizações para testes e aprovações:
	
A seguir, serão apresentados os dashboards para o usuário final feitos pela empresa que mostram como o usuário vê o sistema e como ele funciona(como as informações são mostradas).
Dashboard.
Para auxiliar a gerenciar os projetos, eles usam o Azure Dev, um produto da Microsoft que fornece controle de versão, relatórios, gerenciamento de requisitos, gerenciamento de projetos, compilações automatizadas, testes e recursos de gerenciamento de lançamento.


	Ao final, a entrega da solução é feita por email, e então o cliente deve testar e responder o email com a entrega dizendo se está tudo ok com a solução.


1.4. Problemas e/ou Desafios Enfrentados
O problema mencionado foi na hora da comunicação com o cliente. Em que uma empresa (Empresa A) contratou um representante de outra empresa para fazer um pedido a NOCS sobre um produto. A “Empresa A” queria uma definição de como o produto deveria ser, mas o representante entendeu errado essa solicitação. Ao invés de perguntar novamente ou confirmar o que a Empresa A realmente queria, o representante assumiu que estava certo ao analisar o escopo e na hora da entrega do produto, a empresa A reclamou que estava totalmente diferente do que eles queriam, o que salvou a NOCS de problemas foi o método de escopo utilizado antes de começar a produzir o software pedido.
Sugestões de Melhorias/Necessidades
O sistema de coleta de dados de sensores coleta dados com uma periodicidade de 4 vezes por minuto para cada sensor. Logo em um dia para um conjunto de 10 sensores são 4*60*24*10 = 57600 registros por dia. Atualmente existem vários tipos de visualizações, por minuto, dia, mês e ano. Fazer uma query no banco que agrupa todos esses dados exige muito tempo de processamento o que acaba inviabilizando a visualização dos dados em um tempo hábil. A empresa para contornar esse problema criou um conjunto de tabelas que já agrupa os dados por DIA, MÊS e ANO o que faz existir a replicação de tabelas, porém resolve o problema. Mas a melhoria seria pensar em alguma outra forma de contornar o problema sem precisar criar as tabelas que agrupam os dados/sem a replicação por exemplo.
Uma necessidade apresentada pela empresa, que necessita de uma maior elaboração, é a criação de uma inteligência artificial capaz de analisar os dados coletados e identificar problemas, anomalias e outras informações importantes.
1.5. Necessidades/Expectativas para o Novo Sistema
	A necessidade e expectativas para o novo sistema foi a de uma tela de consultas internas, que será dividida pelos tipos de serviços oferecidos pela empresa com a possibilidade de consultas de dados, uma das expectativas é ter o poder de visualizar todos os clientes de um determinado serviço e quando selecionado algum cliente seja exibido os dados do contrato do mesmo com documentos, valores e informações específicas.
	Além disso, o sistema deve dar a possibilidade de cadastrar novos clientes, e para os clientes já existentes o sistema deve possibilitar a exclusão ou edição de dados do mesmo, com o intuito que, se houver alguma mudança de contrato, possamos editar as informações armazenadas desse cliente.
