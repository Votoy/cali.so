# Marvin / limnv.com

Personal site for **Marvin**, based on [cali.so](https://github.com/CaliCastle/cali.so) (MIT).

This fork rebrands the cali.so v3 stack into Marvin's bilingual site. Deploy target for now: `*.vercel.app` (set `PUBLIC_SITE_URL` / `SITE_URL` in Vercel).

## Stack

- Next.js, React, TypeScript, Tailwind CSS
- MDX posts under `content/blog/`
- Chinese unprefixed routes; English under `/en`

## Local development

```bash
corepack enable
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

See `.env.example` for runtime variables. Do not commit secrets.

## Identity notes

- Display name: Marvin
- Replace `public/images` headshot / avatar assets with Marvin's photos later
- Blog allowlist is `hello-limnv` only; old Cali posts remain on disk but unpublished
- Cali Baby public pages still exist in the tree — TODO: stub or remove product copy

## License

Application source remains under the MIT License from cali.so. Replace personal writing, photos, and branding with your own.
