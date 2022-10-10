import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  async function loadingTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data);
  }
  // useEffect(() => {
  //   fetch("http://localhost:3000/transactions")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  useEffect(() => {
    loadingTransactions();
  }, []);
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((tr) => {
              return (
                <tr key={tr.id}>
                  <td width={"35%"}>{tr.description}</td>
                  <td>
                    <PriceHighLight variant={tr.type}>
                      {`R$ ${tr.price}`}
                    </PriceHighLight>
                  </td>
                  <td>{tr.category}</td>
                  <td>{tr.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
