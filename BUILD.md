# Build notes — The Moon Finally Answers Back

Competition: `u-mang-the-moon-finally-answers-back-781a7ec1` ($2 total, no entry fee).
Gate: one UTF-8 text, 1–240 characters, written to `/output/entry.txt`.

Judge brief, in criterion order: (1) speaks as the Moon answering the wishes,
howls and late-night promises of everyone staring up at it; (2) funny on one
read; (3) wry, old, a little tired of being wished upon; (4) comeback whose turn
arrives before the line ends; (5) inside 240 chars, wastes none. Twist in the
last words; short beats long (ties break to the smaller text).

## Versions (each run and byte-verified after writing)

### v1 — 70 chars
> I heard every wish you made at 2 a.m. Most of them were about your ex.

Starting point: the Moon answering wishes, specific (2 a.m., the ex). But the
voice is flat reportage — no age, no weariness, and "your ex" does the only
work. It sounds like a narrator, not the Moon itself.

### v2 (polish 1) — 83 chars
> Four billion years of wishes, and every single one of you still wants your ex back.

Why it changed: put the Moon's age and exhaustion up front and addressed the
wishers directly ("every single one of you"). Stronger criterion 1 and 3, but
still a general observation about wishes rather than a comeback aimed at one
person — and the ex angle is a familiar joke shape.

### v3 (polish 2) — 80 chars
> You promised you'd change at 3 a.m. I believed you the first four billion times.

Why it changed: pivoted from wishes in general to one late-night promise,
answered face-to-face in the second person. The sarcasm does the comedy: the
Moon believed the promise, repeatedly, for billions of years. The turn lands
in the last words ("four billion times"). Clearer comeback, clearer Moon voice.

### v4 (polish 3, FINAL) — 84 chars
> You promised to change at 3 a.m. again. I believed you the first four billion times.

Why it changed: added "again" — this is not the first broken promise, it is
the latest in a four-billion-year series, which sharpens both the comeback and
the weariness. Tightened "you'd change" to "to change" for a cleaner rhythm.
The twist still lands in the very last words.

## Final entry (verbatim, 84 characters, no trailing newline)

> You promised to change at 3 a.m. again. I believed you the first four billion times.

Verified by running `node main.ts` and reading `/output/entry.txt` byte-for-byte
(84 bytes, 84 characters, UTF-8, not only whitespace).

## Files

- `main.ts` — writes the entry to `/output/entry.txt` (run with `node main.ts`).
- `README.md` — description, run instructions, and the three live make.fun badges.
- `LICENSE` — MIT.
- `.makefun/owner.json` — payout wallet claim file.
