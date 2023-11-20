## Project to introduce me to Next and prisma integration

- Do **sudo npm i -g vercel@latest** to have access to vercel CLI.
- Pull enviroment variables from vercel to local repository using
  **vercel env pull .env.local**
- Link local repository and vercel using vercel link
- Run **npm i --save-dev prisma**
- To migrate **npx prisma db push**
- To preview prisma studio, **npx prisma studio**
- Install prisma client using **npm install @prisma/client**
- **npx prisma generate**

### KYLE PRISMA SECTION

- To setup prisma, **npm prisma init --datasource-provider postgresql**

- .env contains DATABASE_URL=postgresql://<user(postgres)>:<password>@localhost:<port(5432)>/<dbName>

- To format _schema.prisma_ use **npx prisma format**

- _@id_ used to define identifier in a prisma model

- Migrate prisma model to database, **npx prisma migrate dev --name init**

- Install prisma client using **npm install @prisma/client**

- **npx prisma generate**

- One to many relationship, user, post -> 1-many relationship.

```
model User {
  id String @id @default(uuid())
  writtenPosts Post[] @relation("WrittenPosts")
  favoritePosts Post[] @relation("FavoritePosts")
}

model Post {
  author User @relation("WrittenPosts", fields: [authorId], references: [id])
  authorId String
  favoritedBy User? @relation("FavoritePosts", fields: [favoritedById], references: [id])
  favoritedById String?
}
```

- Many to many relationship, category, post -> many-many relationship.

```
model Post {
  categories: Category[]
}

model Category {
  posts: Post[ ]
}
```

- One to one relationship, user, userPreference -> one-to-one relationship.

```
model User {
  userPreference UserPreference?
}

model UserPreference {
  user User @relation(fields: [userId], references: [id])
  userId String @unique
}
```

- MODEL ATTRIBUTES
@unique for unique attributes
@updatedAt for current time

For block-level attributes, use 2-hat symbol (@@)

example,

@@unique([age, name])
@@index([email])
@@id([title, authorId])

- Include and select property

- take property used for pagination
 
- skip used for skipping pages

- orderBy for sorting based on an attribute

