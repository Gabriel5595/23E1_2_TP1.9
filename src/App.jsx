import './App.css'

export default function App() {

    const book = {
        "Nome": "Harry Potter e a Pedra Filosofal",
        "Autor(a)": "J. K. Rowling"
    }

    // Acrescente as informações do livro, usando o operador spread
    const new_book = {...book, "Editora": "Companhia das Letras"}
    // Não modifique daqui em diante
    const mainContainer = <main>
        <strong>{JSON.stringify(new_book)}</strong>
    </main>;
    return mainContainer

}