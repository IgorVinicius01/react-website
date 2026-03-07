import { Dialog } from "./ui/dialog";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { LayoutGrid, SquarePlus } from 'lucide-react';
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import axios from "axios";

interface Morador {
    id: number;
    nome: string;
    telefone: string;
    numero_ap: string;
}

function Predio() {

    const [moradores, setMoradores] = useState<Morador[]>([]);

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [ap, setAp] = useState("");
    
    useEffect(() => {

        async function buscarKitnets(){
            try {
                const resposta = await axios.get('http://localhost:3000/cardsKitnets');

                setMoradores(resposta.data)
            } catch (error) {
                console.error("Erro ao buscar moradores: ", error);
            }
        }

        buscarKitnets();
    }, []);
    
    async function adicionarMorador(e: React.FormEvent) {
        e.preventDefault();

        try {
            const resposta = await axios.post('http://localhost:3000/cardsKitnets', {
                nome: nome,
                numero_ap: ap,
                telefone: telefone,
            })

            const novoMoradorCriado = resposta.data;

            setMoradores((prev) => [...prev, novoMoradorCriado]);

            setNome("");
            setTelefone("");
            setAp("");

        } catch (error) {
            console.error("Erro ao adicionar morador: ", error);
            alert("Erro ao salvar no banco de dados.");
        }
    } 

    return (
        <div className="min-h-screen min-w-full p-6">
            <header className="
                flex items-center 
                justify-between
                w-full h-[60px]">
                
                <div className="flex gap-1">
                    <LayoutGrid size={34}/>
                    <Label className="
                        text-xl">
                        Kitnets
                    </Label>
                </div>

                <div className="flex items-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <SquarePlus size={35} className="cursor-pointer"/>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-md">
                            <form onSubmit={adicionarMorador}>
                                <DialogHeader>
                                    <DialogTitle className="pb-4">Adicionar morador</DialogTitle>
                                </DialogHeader>

                                <Separator/>

                                <div className="flex items-center gap-2 py-4">
                                    <div className="grid flex-1 gap-3">
                                        <Label>Nome:</Label>
                                        <Input
                                            placeholder="Nome"
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            required
                                        />

                                        <Label>Celular:</Label>
                                        <Input
                                            placeholder="Celular"
                                            value={telefone}
                                            onChange={(e) => setTelefone(e.target.value)}
                                            required
                                        />

                                        <Label>Nº Ap:</Label>
                                        <Input
                                            placeholder="Numero do ap"
                                            value={ap}
                                            onChange={(e) => setAp(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <DialogFooter className="sm:justify-between">
                                    <DialogClose asChild>
                                        <Button 
                                            className="cursor-pointer"
                                            variant="outline"
                                            type="button">Cancelar</Button>
                                    </DialogClose>
                                    <Button 
                                        className="cursor-pointer"
                                        type="submit">Adicionar</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </header>

            <div 
                className="
                grid grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-4 
                gap-6
                place-items-center
                pt-4">

                {moradores.map((morador) => (
                    <Card key={morador.id} className="w-full">
                        <CardHeader className="text-2xl font-bold">
                            <div className="text-2xl font-bold">
                                {morador.nome}
                            </div>

                            <span className="
                                text-sm font-medium 
                                bg-muted px-2 py-1 
                                rounded-md">
                                Ap {morador.numero_ap}
                            </span>
                            <Separator/>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-1">
                            <p>Fone: {morador.telefone}</p>
                            <p>Dia do Aluguel: 05</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full cursor-pointer">Cobrar</Button>
                        </CardFooter>
                    </Card>
                ))

                }
            </div>

        </div>
    );
}

export default Predio;