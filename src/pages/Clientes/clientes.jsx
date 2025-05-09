import S from './clientes.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Clientes() {

    const [clientes, setClientes] = useState([]);

    //buscar dados do cliente na API
    useEffect(() => {

        const fetchClientes = async () => {
            try {
                const response = await axios.get('https://api-livros-7h1h.onrender.com/clientes');
                setClientes(response.data); //atualizo os dados do cliente
            } catch(error) {
                console.log("Erro", error);
            }
        };
        fetchClientes();
    },[]);

    return (
        <main className={S.container}>
            <h2 className={S.titulo}>Clientes</h2>

            <section className={S.containerClientes}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead sx={{backgroundColor: '#005695'}}> 
                            <TableRow>
                                <TableCell sx={{color: '#fff'}}><strong>Nome</strong></TableCell>
                                <TableCell sx={{color: '#fff'}}><strong>Email</strong></TableCell>
                                <TableCell sx={{color: '#fff'}}><strong>Livro Escolhido</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clientes.map((cliente, index) => (
                                <TableRow key={index}>
                                    <TableCell>{cliente.nome}</TableCell>
                                    <TableCell>{cliente.email}</TableCell>
                                    <TableCell>{cliente.livro_escolhido }</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </main>
    )
}