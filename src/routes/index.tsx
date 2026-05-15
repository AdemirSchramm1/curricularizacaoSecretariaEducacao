import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

import sc from "@/assets/quiz/sc.png";
import bahia from "@/assets/quiz/bahia.png";
import amazonas from "@/assets/quiz/amazonas.png";
import ceara from "@/assets/quiz/ceara.png";
import roxo from "@/assets/quiz/roxo.png";
import azulbranco from "@/assets/quiz/azulbranco.png";
import preto from "@/assets/quiz/preto.png";
import rosa from "@/assets/quiz/rosa.png";
import itajai from "@/assets/quiz/itajai.png";
import peixe from "@/assets/quiz/peixe.png";
import ponte from "@/assets/quiz/ponte.png";
import veleiro from "@/assets/quiz/veleiro.png";
import roupa from "@/assets/quiz/roupa.png";
import foguete from "@/assets/quiz/foguete.png";
import navio from "@/assets/quiz/navio.png";
import aviao from "@/assets/quiz/aviao.png";
import cavalo from "@/assets/quiz/cavalo.png";
import elefante from "@/assets/quiz/elefante.png";
import pinguim from "@/assets/quiz/pinguim.png";
import girafa from "@/assets/quiz/girafa.png";
import futebol from "@/assets/quiz/futebol.png";
import flamengo from "@/assets/quiz/flamengo.png";
import palmeiras from "@/assets/quiz/palmeiras.png";
import santos from "@/assets/quiz/santos.png";
import marreco from "@/assets/quiz/marreco.png";
import carnaval from "@/assets/quiz/carnaval.png";
import junina from "@/assets/quiz/junina.png";
import oktoberfest from "@/assets/quiz/oktoberfest.png";
import marrecorecheado from "@/assets/quiz/marrecorecheado.png";
import sushi from "@/assets/quiz/sushi.png";
import tacos from "@/assets/quiz/tacos.png";
import pizza from "@/assets/quiz/pizza.png";
import alemaesital from "@/assets/quiz/alemaesital.png";
import egipcios from "@/assets/quiz/egipcios.png";
import viking from "@/assets/quiz/viking.png";
import asteca from "@/assets/quiz/asteca.png";
import floresta from "@/assets/quiz/floresta.png";
import neve from "@/assets/quiz/neve.png";
import deserto from "@/assets/quiz/deserto.png";
import vulcao from "@/assets/quiz/vulcao.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Quiz da Brusque — Diversão para Crianças" },
      { name: "description", content: "Quiz infantil com 10 perguntas sobre Brusque para crianças de 4 a 5 anos." },
    ],
  }),
});

type Option = { text: string; img: string };
type Question = { q: string; emoji: string; options: Option[]; answer: number };

const QUESTIONS: Question[] = [
  { q: "Em qual estado fica a cidade de Brusque?", emoji: "🗺️", answer: 0,
    options: [{text:"Santa Catarina",img:sc},{text:"Bahia",img:bahia},{text:"Amazonas",img:amazonas},{text:"Ceará",img:ceara}] },
  { q: "Qual é a cor que mais aparece na bandeira de Brusque?", emoji: "🚩", answer: 1,
    options: [{text:"Roxo",img:roxo},{text:"Azul e branco",img:azulbranco},{text:"Preto",img:preto},{text:"Rosa",img:rosa}] },
  { q: "Qual rio passa pela cidade de Brusque?", emoji: "🌊", answer: 0,
    options: [{text:"Rio Itajaí-Mirim",img:itajai},{text:"Rio Amazonas",img:peixe},{text:"Rio Tietê",img:ponte},{text:"Rio São Francisco",img:veleiro}] },
  { q: "Brusque é famosa por fabricar o quê?", emoji: "👕", answer: 0,
    options: [{text:"Roupas e tecidos",img:roupa},{text:"Foguetes",img:foguete},{text:"Navios",img:navio},{text:"Aviões",img:aviao}] },
  { q: "Qual animal é símbolo das festas alemãs em Brusque?", emoji: "🐎", answer: 0,
    options: [{text:"Cavalo",img:cavalo},{text:"Elefante",img:elefante},{text:"Pinguim",img:pinguim},{text:"Girafa",img:girafa}] },
  { q: "Como se chama o time de futebol de Brusque?", emoji: "⚽", answer: 0,
    options: [{text:"Brusque FC",img:futebol},{text:"Flamengo",img:flamengo},{text:"Palmeiras",img:palmeiras},{text:"Santos",img:santos}] },
  { q: "Qual festa famosa acontece em Brusque?", emoji: "🎉", answer: 0,
    options: [{text:"Fenarreco",img:marreco},{text:"Carnaval do Rio",img:carnaval},{text:"Festa Junina do Norte",img:junina},{text:"Oktoberfest",img:oktoberfest}] },
  { q: "Qual comida típica alemã é comum em Brusque?", emoji: "🍖", answer: 0,
    options: [{text:"Marreco recheado",img:marrecorecheado},{text:"Sushi",img:sushi},{text:"Tacos",img:tacos},{text:"Pizza havaiana",img:pizza}] },
  { q: "Qual povo ajudou a fundar a cidade de Brusque?", emoji: "👨‍👩‍👧", answer: 0,
    options: [{text:"Alemães e italianos",img:alemaesital},{text:"Egípcios",img:egipcios},{text:"Vikings",img:viking},{text:"Astecas",img:asteca}] },
  { q: "O que tem muito nas montanhas de Brusque?", emoji: "🌳", answer: 0,
    options: [{text:"Árvores e mata verde",img:floresta},{text:"Neve o ano todo",img:neve},{text:"Areia do deserto",img:deserto},{text:"Vulcões",img:vulcao}] },
];

const OPTION_BG = [
  "bg-[oklch(0.9_0.12_220)]",
  "bg-[oklch(0.92_0.14_80)]",
  "bg-[oklch(0.9_0.13_160)]",
  "bg-[oklch(0.9_0.12_350)]",
];

function Index() {
  const [stage, setStage] = useState<"login" | "quiz" | "done">("login");
  const [school, setSchool] = useState("");
  const [child, setChild] = useState("");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);

  function handlePick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === QUESTIONS[current].answer) setScore((s) => s + 1);
    setTimeout(() => {
      if (current + 1 >= QUESTIONS.length) {
        setStage("done");
      } else {
        setCurrent((c) => c + 1);
        setPicked(null);
      }
    }, 800);
  }

  function restart() {
    setStage("login");
    setSchool("");
    setChild("");
    setCurrent(0);
    setScore(0);
    setPicked(null);
  }

  return (
    <main
      className="min-h-screen flex items-start sm:items-center justify-center p-4 overflow-y-auto"
      style={{ background: "var(--gradient-fun)" }}
    >
      {stage === "login" && (
        <Card className="w-full max-w-md p-5 sm:p-7 rounded-3xl shadow-[var(--shadow-pop)] border-4 border-white my-4">
          <div className="text-center mb-4">
            <div className="text-5xl mb-1">🎈</div>
            <h1 className="text-2xl font-extrabold text-foreground">Quiz da Brusque</h1>
            <p className="text-muted-foreground text-sm mt-1">Vamos brincar e aprender? 🎉</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setStage("quiz"); }}
            className="space-y-3"
          >
            <div>
              <Label htmlFor="school" className="text-sm">Escola (opcional)</Label>
              <Input id="school" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="Nome da escola" className="rounded-2xl h-11 text-base mt-1" />
            </div>
            <div>
              <Label htmlFor="child" className="text-sm">Seu nome (opcional)</Label>
              <Input id="child" value={child} onChange={(e) => setChild(e.target.value)} placeholder="Como você se chama?" className="rounded-2xl h-11 text-base mt-1" />
            </div>
            <Button type="submit" className="w-full h-14 text-xl font-bold rounded-2xl">Começar! ▶️</Button>
          </form>
        </Card>
      )}

      {stage === "quiz" && (
        <Card className="w-full max-w-3xl p-5 sm:p-7 rounded-3xl shadow-[var(--shadow-pop)] border-4 border-white my-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              Pergunta {current + 1} de {QUESTIONS.length}
            </span>
            <span className="text-sm font-bold">⭐ {score}</span>
          </div>
          <div className="text-center mb-5">
            <div className="text-5xl mb-2">{QUESTIONS[current].emoji}</div>
            <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">{QUESTIONS[current].q}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {QUESTIONS[current].options.map((opt, i) => {
              const isCorrect = picked !== null && i === QUESTIONS[current].answer;
              const isWrong = picked === i && i !== QUESTIONS[current].answer;
              return (
                <button
                  key={i}
                  onClick={() => handlePick(i)}
                  disabled={picked !== null}
                  className={`${OPTION_BG[i]} rounded-2xl border-4 overflow-hidden transition-all flex flex-col ${
                    isCorrect ? "border-[oklch(0.5_0.2_145)] ring-4 ring-[oklch(0.72_0.2_145)]" :
                    isWrong ? "border-destructive opacity-60" :
                    "border-white hover:scale-105"
                  }`}
                >
                  <div className="bg-white aspect-square flex items-center justify-center p-1">
                    <img src={opt.img} alt={opt.text} loading="lazy" width={512} height={512} className="w-full h-full object-contain" />
                  </div>
                  <div className="px-2 py-2 text-center text-foreground font-bold text-sm sm:text-base leading-tight min-h-[3rem] flex items-center justify-center">
                    {isCorrect ? "✅ " : isWrong ? "❌ " : ""}{opt.text}
                  </div>
                </button>
              );
            })}
          </div>
        </Card>
      )}

      {stage === "done" && (
        <Card className="w-full max-w-md p-8 rounded-3xl shadow-[var(--shadow-pop)] border-4 border-white text-center">
          <div className="text-7xl mb-3">🏆</div>
          <h2 className="text-3xl font-extrabold mb-2">Parabéns{child ? `, ${child}` : ""}!</h2>
          {school && <p className="text-muted-foreground mb-2">{school}</p>}
          <p className="text-xl mb-6">Você acertou <span className="font-extrabold text-primary">{score}</span> de {QUESTIONS.length}!</p>
          <Button onClick={restart} className="w-full h-14 text-xl font-bold rounded-2xl">Jogar de novo 🔁</Button>
        </Card>
      )}
    </main>
  );
}
