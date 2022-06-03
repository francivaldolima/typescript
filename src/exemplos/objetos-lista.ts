const pessoa = {
  nome: "Mariana",
  idade: 28,
  profissao: "desenvolvedor",
};

pessoa.idade = 20;

const andre: { nome: string; idade: number; profissao: string } = {
  nome: "Andre",
  idade: 20,
  profissao: "pintor",
};

const paula: { nome: string; idade: number; profissao: string } = {
    nome: "Paula",
    idade: 20,
    profissao: "desenvolvedor",
  };


enum Profissao{
    Professora,
    Atriz,
    Desenvolvedor,
    JogadorDeFutebol
}

interface Estudante extends Pessoa{
    materias: string[]
}
interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao;
}

const vanessa: Pessoa={
    nome:'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedor
}

const maria: Pessoa={
    nome:'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedor
}

const jessica: Estudante ={
    nome:'Jessica',
    idade: 23,
    profissao: Profissao.Desenvolvedor,
    materias:['Matemática discreta', 'programação']
}

const monica: Estudante ={
    nome:'Monica',
    idade: 23,
    materias:['Matemática discreta', 'programação']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias);
