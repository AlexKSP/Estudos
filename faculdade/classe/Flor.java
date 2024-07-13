package classe;

//Assim que se cria uma classe
public class Flor {
    
    //Aqui defino os atibutos/variaveis 
    private String nome;
    private int numeroDePetalas;
    private float preco;
    //Declarei porém não atribuo o nome neste ponto nem quantidade ou preco somente crio os atributos "vazios"
    
    public Flor() {

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    //----
    public int getNumeroDePetalas() {
        return numeroDePetalas;
    }

    public void setNumeroDePetalas(int numeroDePetalas) {
        this.numeroDePetalas = numeroDePetalas;
    }
    //----
    public float getPreco() {
        return preco;
    }

    public void setPreco(float preco) {
        this.preco = preco;
    }
}
