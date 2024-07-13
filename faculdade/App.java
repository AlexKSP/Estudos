import classe.Flor;

public class App {      
    public static void main(String[] args){

        //nome da classe, nome da variavel = criaçao de objeto, chamada do metodo
        Flor flor = new Flor();

        //atribuo nome
        flor.setNome("Tulipa");

        //imprimo o nome
        System.out.println("Nome: "+ flor.getNome());

    }

}