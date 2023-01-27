class Animal {
    #nome;
    #idade;
    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
    }
    apresentar(){
        return `Oi! Eu sou um Animal. Meu nome é ${this.nome} e tenho ${this.idade} anos`;
    } 

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }
}

// let animal1 = new Animal('Penelope',5);
// console.log(animal1.apresentar());

class Mamifero extends Animal {
    #amamenta;
    #tipo;
    constructor(nome, idade, amamenta,tipo){
        super(nome,idade);
        this.#amamenta = amamenta;
        this.#tipo = tipo;
    }    

    get amamenta(){
        if(this.#amamenta){
            return 'amamento';
        }
        if(!this.amamenta){
            return 'não amamento';
        }
    }

    apresentar(){
        return `Oi! Eu sou um Mamífero. Meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.amamenta}.`;
    }
    
    locomover(){
        if(this.#tipo == 'terrestre'){
            return 'Estou me movendo.';
        }

        if(this.#tipo == 'marinho'){
            return 'Estou nadando.';
        }

        if(this.#tipo == 'marinho'){
            return 'Estou voando.';
        }

    }
}

// let mamifero1 = new Mamifero('Vanel',30,true,'terrestre');
// console.log(mamifero1.apresentar());
// console.log(mamifero1.locomover());

class Cachorro extends Mamifero {
    #pedigree;
    constructor(nome, idade, amamenta, pedigree){
        super(nome,idade,amamenta);
        this.#pedigree = pedigree;
    }
    get pedigree(){
        if(this.#pedigree){
            return 'Possuo pedigree';
        }
        if(!this.#pedigree){
            return 'Não possuo pedigree';
        }
    }
    latir() {
        return 'Au, au, au!';
    }

    apresentar(){
        return `Oi! Eu sou um mamifero do tipo cachorro. Meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.amamenta}. ${this.pedigree}.`;
    }
}

// let cachorro1 = new Cachorro('Dama',10,true,true);
// console.log(cachorro1.apresentar());
// console.log(cachorro1.latir());

class Humano extends Mamifero {
    #cpf;
    constructor(nome, idade, cpf){
        super(nome,idade);
        this.#cpf = cpf;
    }

    get cpf(){
        return this.#cpf;
    }

    maiorDeIdade(){
        if(this.idade >= 18 ){
            return 'Sou maior de idade';
        }
        if(this.idade < 18) {
            return 'Sou menor de idade';
        }
    }

    apresentar(){
        return `Oi! Meu nome é ${this.nome}, tenho ${this.idade} anos e meu cpf é ${this.cpf}. ${this.maiorDeIdade()}.`;
    }
}

// let humano1 = new Humano('Raquel',26,11122233344);
// console.log(humano1.apresentar());

class Advogado extends Humano {
    #oab;
    constructor(nome, idade, cpf, oab){
        super(nome,idade,cpf);
        this.#oab = oab;
    }

    validarOAB(){
        if(this.#oab){
            return 'Estou apto(a) para advogar';
        }
        if(!this.#oab){
            return 'Não estou apto(a) para advogar';
        }
    }

    apresentar(){
        return `Oi! Meu nome é ${this.nome}, tenho ${this.idade} anos e meu cpf é ${this.cpf}. ${this.maiorDeIdade()}. ${this.validarOAB()}`;
    }

}

// let advogado1 = new Advogado('Mulher Hulk',30,12345698711,true);
// console.log(advogado1.apresentar());

class Medico extends Humano {
    #residencia;
    constructor(nome, idade, cpf, residencia){
        super(nome,idade,cpf);
        this.#residencia = residencia;
    }

    validarResidencia(){
        if(this.#residencia){
            return 'Possuo residência';
        }
        if(!this.#residencia){
            return 'Não possuo residência';
        }
    }

    apresentar(){
        return `Oi! Meu nome é ${this.nome}, tenho ${this.idade} anos e meu cpf é ${this.cpf}. ${this.maiorDeIdade()}. ${this.validarResidencia()}.`;
    }
}

// let medico1 = new Medico('Doutor House',40,55544422211,true);
// console.log(medico1.apresentar());

class Desenvolvedor extends Humano {
    #so;
    constructor(nome, idade, cpf, so){
        super(nome,idade,cpf);
        this.#so = so;
    }

    get so(){
        return this.#so;
    }

    exibirSO(){
        return `O meu SO preferido/ que gostro de trabalhar/estudar é ${this.#so}`;
    }

    apresentar(){
        return `Oi! Meu nome é ${this.nome}, tenho ${this.idade} anos e meu cpf é ${this.cpf}. ${this.maiorDeIdade()}. ${this.exibirSO()}.`;
    }
}

// let desenvolvedor1 = new Desenvolvedor('Bill Gates',67,23554698711,'Windows');
// console.log(desenvolvedor1.apresentar());

class Backend extends Desenvolvedor {
    #linguagem;
    constructor(nome, idade, cpf, so, linguagem){
        super(nome,idade,cpf,so);
        this.#linguagem = linguagem;
    }

    darDesculpa(){
        let numSorteado = Math.floor(10* Math.random() + 1);
        if(numSorteado%2 == 0){
            return  "Na minha máquina funciona";
        }
        if(numSorteado%2 !== 0){
            return "Terminei! Falta só testar";
        }
    }

    exibirLinguagemPreferida(){
        return `Dentre as linguagens de programação, para mim, se destaca: ${this.#linguagem}`;
    }

    apresentar(){
        return `Oi! Meu nome é ${this.nome}, tenho ${this.idade} anos e meu cpf é ${this.cpf}. ${this.exibirSO()}. ${this.exibirLinguagemPreferida()}.`;
    }
}

// let backend1 = new Backend('Ismael',25,11133355522,'Windows','Typescript');
// console.log(backend1.apresentar());
// console.log(`#Desculpa que mais utiliza: "${backend1.darDesculpa()}"`);

class Frontend extends Desenvolvedor {
    #ferramenta;
    constructor(nome, idade, cpf, so, ferramenta){
        super(nome,idade,cpf,so);
        this.#ferramenta = ferramenta;
    }

    exibirAtividade(){
        let atividade = ['Pesquisa como Centralizar Div',
                        'Mexeu em uma parte do código e desconfigurou toda a página',
                        'Já foi confundido(a) com Designer',
                        'Falou que só faltava testar, enquanto ainda terminava o codigo',
                        'Apareceu um bug na tela, mas, falou que era uma feature',
                        'Já pôs easteregg em um projeto'];
        let numSorteado = parseInt((Math.random() * (atividade.length)));
        return atividade[numSorteado];
    }

    exibirFerramentaPreferida(){
        return `Dentre as ferramentas que utilizo, amo/gosto de trabalhar com: ${this.#ferramenta}`;
    }

    apresentar(){
        return `Oi! Meu nome é ${this.nome}, tenho ${this.idade} anos e meu cpf é ${this.cpf}. ${this.maiorDeIdade()}. ${this.exibirSO()}. ${this.exibirFerramentaPreferida()}`;
    }
}

// let frontend1 = new Frontend('Raquel',26,33355599912,'Windows','Javascript');
// console.log(frontend1.apresentar());
// console.log(`Ótimo desenvolvedor(a), mas: ${frontend1.exibirAtividade()} `);

class Ave extends Animal {
    #voa;
    constructor(nome, idade, voa){
        super(nome,idade);
        this.#voa = voa;
    }   

    apresentar(){
        return `Oi! Eu sou uma Ave. Meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.#voa ? 'vôo' : 'não vôo'}.`;
    }

    voar(){
        if(this.#voa){
            return 'Estou voando.';
        }
        if(!this.#voa){
            return 'Não posso voar.';
        }
    }
}

// let ave1 = new Ave('Fly',12,false);
// console.log(ave1.apresentar());
// console.log(ave1.voar());

class Gaviao extends Ave {
    #cor;
    constructor(nome, idade,cor){
        super(nome, idade);
        this.#cor = cor;
    }

    exibirFrase(){
        let textos = ['Voe como um gavião, e queime como um trovão (Júlio Francisco)',
                     'Pessoas humildes e vencedoras agem como as águias. Antes de grandes voos, elas abaixam a cabeça (autor desconhecido)',
                     'Diante de obstáculos, seja como uma águia. Abra suas asas e eleve seus pensamentos na direção da vitória (autor desconhecido)'];
        let numSorteado = parseInt((Math.random() * (textos.length)));
        return textos[numSorteado];
    }

    apresentar(){
        return `Oi! Eu sou uma ave do tipo Gavião. Meu nome é ${this.nome}, tenho ${this.idade} anos e minha cor é ${this.#cor}.`;
    }
}

// let gaviao1 = new Gaviao('Arqueiro',28,'Branco com preto');
// console.log(gaviao1.apresentar());
// console.log(`#Seu conselho de gavião é: ${gaviao1.exibirFrase()}.`);

class Peixe extends Animal {
    #grupo;
    constructor(nome, idade, grupo){
        super(nome,idade);
        this.#grupo = grupo;
    }    

    get grupo(){
        return this.#grupo;
    }

    apresentar(){
        return `Oi! Eu sou um Peixe. Meu nome é ${this.nome}, tenho ${this.idade} anos e sou do grupo ${this.grupo}.`;
    } 
    nadar(){
        return "Estou nadando.";
    }
}

// let peixe1 = new Peixe('Blublu o Carpa',2,'ósseo');
// console.log(peixe1.apresentar());
// console.log(peixe1.nadar());

class Tubarao extends Peixe {
    #especie;
    constructor(nome,idade,especie){
        super(nome,idade);
        this.#especie = especie;
    }
    exibirCuriosidade () {
        let list = ['Tubarão te amo é o nome de uma música', 
                    'Os tubarões apresentam respiração branquial, sendo esses capazes de retirar o oxigênio da água.',
                    'Filmes de tubarão: Tubarão, Megatubarão e Grande Tubarão Branco']
        let numSorteado = parseInt((Math.random() * (list.length)));
        return list[numSorteado];
    }

    get especie(){
        return this.#especie;
    }

    apresentar(){
        return `Oi! Eu sou um peixe do tipo Tubarão. Meu nome é ${this.nome}, tenho ${this.idade} anos e sou da espécie ${this.especie}.`;
    } 
}

// let tubarao1 = new Tubarao('Lenny',10,'tubarão branco');
// console.log(tubarao1.apresentar());
// console.log(`#Sua curiosidade de tubarão é: ${tubarao1.exibirCuriosidade()}.`);
