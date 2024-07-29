db = db.getSiblingDB("gariobald");
db.createUser({
  user: "gariobald",
  pwd: "gariobald",
  roles: [
    { role: "readWrite", db: "gariobald" },
    { role: "dbAdmin", db: "gariobald" },
  ],
});
