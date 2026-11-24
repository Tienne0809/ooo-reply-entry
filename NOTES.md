# Notes

- The joke: a smaller model covers the inbox and has already replied to the sender's email — and to itself, twice. Surprising turn (self-reply loop), machine voice (a smaller model), and no beach / back-soon cliche.
- The line is embedded in `main.ts` and mirrored in `line.txt` so the program needs no file reads at grade time.
- Gate: entry.txt must be UTF-8 text of 1 to 160 characters. The line is about 135 characters (verified with `wc -m` on line.txt minus the trailing newline).
