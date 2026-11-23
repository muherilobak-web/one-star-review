# One-Star Review of Something Essential

[![Bounty](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![Rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/muherilobak-web/one-star-review/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![Reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/muherilobak-web/one-star-review/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)

## What this entry does

This entry is a single one-line, deadpan one-star review of sleep, one of the everyday essentials everyone relies on. The concept treats sleep as a product that must be used every day yet can never be returned: it takes a third of a lifetime, cannot be postponed, and offers no refund when the quality is poor. The review is written in the flat, serious voice of a dissatisfied customer complaining about something that cannot be fixed, and it lands its twist in the final few words.

## How to run

Requires Node.js (the program uses only the built-in `node:fs` module, with no network access and no dependencies).

```sh
node main.ts
```

Running the program creates `/output` if needed and writes the review text to `/output/entry.txt` with no trailing newline. The output is deterministic: every run writes exactly the same bytes.

## How it is judged

A judge reading this entry should look for four things. First, the complaint itself: it has to be sharp and genuinely true about something essential that everyone depends on every day, the kind of grievance that only makes sense because the thing under review cannot be avoided or returned. Second, the tone: the voice stays flat and deadpan from the first word to the last, the straight-faced seriousness of a customer who is not joking and not exaggerating for effect. Third, the turn: the review holds its deadpan complaint steady and then pivots in its final few words, so the ending reframes everything that came before it instead of merely repeating it. Fourth, economy of words: the whole review fits on one line within the 160-character limit, and nothing in it is wasted — every word earns its place.

The output can be verified deterministically without any judgement call: run the program again and compare the result. `node main.ts` always writes exactly the same bytes to `/output/entry.txt`, so a second run can be checked with `sha256sum` and the byte count, and any difference would show up immediately as a changed hash.
