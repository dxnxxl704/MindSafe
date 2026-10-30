/*
 * MindSafe - Mini banco de dados do MVP
 * Armazenamento local para protótipo.
 * Não substitui um banco de dados/servidor em produção.
 */

const MINDSAFE_DB_KEYS = Object.freeze({
  users: "mindsafe_users",
  session: "mindsafe_session",
  moods: "mindsafe_moods",
  diary: "mindsafe_diary",
  support: "mindsafe_support",
});

function dbRead(key, fallback = []) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function dbWrite(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}

function dbId(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function dbNow() {
  return new Date().toISOString();
}

const MindSafeDB = {
  keys: MINDSAFE_DB_KEYS,

  getUsers() {
    return dbRead(this.keys.users, []);
  },

  getUserById(id) {
    return this.getUsers().find((user) => user.id === id) || null;
  },

  getUserByEmail(email) {
    const normalized = String(email || "").trim().toLowerCase();
    return this.getUsers().find(
      (user) => String(user.email || "").toLowerCase() === normalized,
    ) || null;
  },

  createUser(data) {
    const users = this.getUsers();
    const user = {
      id: dbId("usr"),
      name: String(data.name || "").trim(),
      email: String(data.email || "").trim().toLowerCase(),
      phone: String(data.phone || "").trim(),
      city: String(data.city || "").trim(),
      contact: data.contact || "email",
      passwordHash: data.passwordHash || "",
      createdAt: dbNow(),
      updatedAt: dbNow(),
    };
    users.push(user);
    dbWrite(this.keys.users, users);
    return user;
  },

  updateUser(id, changes) {
    const users = this.getUsers();
    const index = users.findIndex((user) => user.id === id);
    if (index < 0) return null;

    users[index] = {
      ...users[index],
      ...changes,
      id: users[index].id,
      updatedAt: dbNow(),
    };
    dbWrite(this.keys.users, users);
    return users[index];
  },

  deleteUser(id) {
    const users = this.getUsers().filter((user) => user.id !== id);
    dbWrite(this.keys.users, users);
    this.getMoods(id).forEach((item) => this.deleteMood(item.id));
    this.getDiary(id).forEach((item) => this.deleteDiary(item.id));
    return true;
  },

  setSession(userId) {
    return dbWrite(this.keys.session, {
      userId,
      createdAt: dbNow(),
    });
  },

  getSession() {
    return dbRead(this.keys.session, null);
  },

  getCurrentUser() {
    const session = this.getSession();
    if (session?.userId) return this.getUserById(session.userId);

    // Compatibilidade com a versão antiga do protótipo.
    try {
      const legacy = JSON.parse(localStorage.getItem("mindsafeUser"));
      if (!legacy) return null;
      return this.getUserByEmail(legacy.email) || legacy;
    } catch {
      return null;
    }
  },

  clearSession() {
    localStorage.removeItem(this.keys.session);
  },

  addMood(userId, mood) {
    const moods = dbRead(this.keys.moods, []);
    const record = {
      id: dbId("mood"),
      userId,
      mood: String(mood),
      createdAt: dbNow(),
    };
    moods.push(record);
    dbWrite(this.keys.moods, moods);
    return record;
  },

  getMoods(userId) {
    return dbRead(this.keys.moods, [])
      .filter((item) => item.userId === userId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  deleteMood(id) {
    dbWrite(
      this.keys.moods,
      dbRead(this.keys.moods, []).filter((item) => item.id !== id),
    );
  },

  addDiary(userId, text) {
    const diary = dbRead(this.keys.diary, []);
    const record = {
      id: dbId("diary"),
      userId,
      text: String(text).trim(),
      createdAt: dbNow(),
    };
    diary.push(record);
    dbWrite(this.keys.diary, diary);
    return record;
  },

  getDiary(userId) {
    return dbRead(this.keys.diary, [])
      .filter((item) => item.userId === userId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  deleteDiary(id) {
    dbWrite(
      this.keys.diary,
      dbRead(this.keys.diary, []).filter((item) => item.id !== id),
    );
  },

  addSupport(userId, topic, message) {
    const support = dbRead(this.keys.support, []);
    const record = {
      id: dbId("support"),
      userId: userId || null,
      topic: String(topic || "").trim(),
      message: String(message || "").trim(),
      createdAt: dbNow(),
    };
    support.push(record);
    dbWrite(this.keys.support, support);
    return record;
  },
};

// Alias curto para facilitar testes no console do navegador.
const DB = MindSafeDB;
