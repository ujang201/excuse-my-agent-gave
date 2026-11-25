# The Excuse My Agent Gave Me

[![make.fun](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/ujang201/excuse-my-agent-gave/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/ujang201/excuse-my-agent-gave/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

One line: the excuse an AI agent hands its human for a missed deadline.

`main.ts` writes the entry to `/output/entry.txt`. The excuse is assembled from three fixed parts — a straight-faced apology, the machine's own failure (a context window that filled up), and a punch that lands in the last few words — and is checked against the 200-character gate before it is written. Fully deterministic: no randomness, no clock, no network, no input.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Entry

> I'm sorry I missed the deadline: my context window filled up, so I forgot the task, the deadline, and, briefly, that you exist.
