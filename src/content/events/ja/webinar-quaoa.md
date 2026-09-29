---
title: "Q-Nekoウェビナー: Iterative warm-started QAOA for QUBO problems on noisy quantum hardware"
slug: "webinar-qaoa"               # page at /events/<slug>
description: "How far can a shallow QAOA circuit be pushed on today's noisy quantum hardware? This Q-Neko webinar walks from a plain QAOA run to an iterative, warm-started solver loop and shows how a small reinforcement learning agent can take over the tuning of that loop. Everything is performed on the q-neko-qec framework developed at IT4Innovations."
startDate: 2026-10-27          # real dates
endDate: 2026-10-27
location: "オンライン"       # optional, shown as the card meta label
---

**【ご注意】**　このウェビナーは英語のみで行われます。

**日時:** 2026年10月27日（火） 17:00-18:00 JST / 09:00-10:00 CET

**参加登録フォーム:** https://link.webropolsurveys.com/EP/626029970ED6AFAC

### イベント概要

QAOA is the standard variational algorithm for combinatorial optimization on gate-based quantum computers, and on today's devices it rarely delivers a good solution on its own. The circuit has to stay shallow, every shot is expensive and noisy, and the parameter landscape gives the classical optimizer little to work with. This webinar presents one practical path to improving the situation. 

We start from a QUBO problem and a plain depth-one QAOA run, and look at what it can and cannot do with a small shot budget per run. We then turn QAOA into an outer loop: each round runs a few short restarts, rescores every sampled bitstring classically, keeps the best one and uses it as the warm start of the next round. We show why the naive warm start collapses onto its own seed, and how the noise-directed adaptive warm start of Maciejewski, Hadfield, Wallis et al. (2026) repairs it. 

Finally we treat the loop as a control problem. The per-round knobs (warm-start bias, number of restarts, shot allocation, when to stop) become the action space of a small reinforcement learning agent trained on random QUBO instances in simulation, rewarded by solution quality per shot spent. We compare the learned controller with the hand-tuned schedule under an identical shot budget and discuss what the agent actually learns. 

The webinar is designed for participants with a basic understanding of gate-based quantum computing. Familiarity with Qiskit is helpful. No background in reinforcement learning is needed.

### プログラム (JST)

**17:00 – 17:05**  Welcome and introduction to Q-Neko – Chair: Marek Lampart.

**17:05 – 17:15**  QAOA in the shot-limited noisy regime – QUBO to Ising, the depth-one circuit, why it stalls at a small shot budget. Results of a stock QAOA run on a small instance, on the statevector simulator and under a noise on VLQ device.

**17:15 – 17:30**  Iterative QAOA – Rounds of restarts, classical rescoring of every sample, elitism and patience. The warm-start trap (the circuit collapses onto its seed) and the noise-directed adaptive warm start that fixes it.

**17:30 – 17:42**  Learning the loop – The round knobs as an action space, the round history as the observation, reward per shot. A small reinforcement learning agent trained in simulation and compared with the hand-tuned schedule under the same shot budget. What the agent learns and where the gain comes from.

**17:42 – 17:45**  Summary and outlook – Next step towards star-resonator hardware.

**17:45 – 18:00**  Discussion and Q&A

### 登壇者
**Ryszard Kukulski** is a post-doc at IT4Innovations. He has contributed to research in quantum error correction, focusing on probabilistic computation and optimization of resources needed for quantum computing. His prior works covered variety of subjects from quantum information theory. He is an author of scalable benchmarking procedure based on heavy output generation problem. In his articles, Ryszard utilized random quantum matrix ensembles to create generative schemes with application to error correction, benchmarking and quantum measurement discrimination. 

**Adam Bílek** is a doctoral student and researcher at IT4Innovations, VSB – Technical University of Ostrava, working on quantum optimization algorithms for near-term hardware and on quantum channel discrimination. His published work covers the discrimination of quantum channels in parallel and multiple-shot schemes, including an experimental study on IBM Quantum processors of which circuit architectures survive hardware noise, and the noise resilience of single-qubit quantum key distribution protocols against independent attacks. 
