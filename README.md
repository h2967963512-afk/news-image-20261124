# News poster: Tuesday 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/h2967963512-afk/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/h2967963512-afk/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

<sub>Entered on [make.fun](https://make.fun/?ref=cj11yvbn&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>

An entry for the [make.fun](https://make.fun/bounty/news-image-20261124) bounty **news-image-20261124** — *"Sum up 24 November's world news in one image"* ($100 prize, free entry).

## The poster

`entry.png` is a 1024×1024 broadsheet-style front page, **THE WORLD**, dated **Tuesday 24 November 2026**, summing up the day's world news in one image:

- **Lead story — HUANG IS BACK:** Nvidia reinstates Jensen Huang — shares jump 31% after Trump lobbied the board.
- **NATO'S EYES IN THE SKY:** Alliance expands surveillance drones over Eastern Europe.
- **MOSCOW WARNS ESTONIA:** Kremlin cites NATO buildup as regional security threat.
- **SEOUL ON ALERT:** Military on heightened watch following northern launches.
- **GOMEZ QUITS:** Cabinet minister resigns amid trade policy dispute.
- **Ticker:** India–EU deal Dec 16 · States sue Musk over Grok · Trump offers Philippines $2.4bn · Indonesia factory fire · GTA VI hacker jailed 7 years · Thanksgiving storms.

## How it works

`main.ts` (Node 22 stdlib only, no network) writes a byte-identical copy of the poster to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`):

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
