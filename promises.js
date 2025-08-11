// =====  Fetch with promises
// =======
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  })
  .then((data) => {
    const firstCharacter = data.results[0];
    console.log("USER:", firstCharacter.name);
  })
  .catch((err) => console.error("failed:", err))
  .finally(() => console.log("cleanup always runs"));

// =====  Fetch with promises all names
// =======
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  })
  .then((data) => {
    const characters = data.results;

    console.log(
      "USER:",
      characters.map((character) => character.name).join("\n"),
    );

    document.getElementById("row").innerHTML = characters
      .map((character) => character.name)
      .join("<br>");
  })
  .catch((err) => console.error("failed:", err))
  .finally(() => console.log("cleanup always runs"));

// ======== resolve/reject style
// =======
function getFirstCharacter() {
  return new Promise((resolve, reject) => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        if (!res.ok) {
          reject(new Error(res.status));
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          resolve(data.results[0]);
        }
      })
      .catch(reject);
  });
}

getFirstCharacter()
  .then((firstCharacter) => {
    console.log("USER:", firstCharacter.name);
  })
  .catch((err) => {
    console.error("failed:", err);
    throw err; // rethrow to trigger final cleanup
  })
  .finally(() => {
    console.log("cleanup always runs");
  });

// =====  async/await using then
// =======
async function getFirstCharacter() {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  if (!res.ok) {
    throw new Error(res.status);
  }

  const data = await res.json();
  return data.results[0];
}

getFirstCharacter()
  .then((firstCharacter) => {
    console.log("USER:", firstCharacter.name);
  })
  .catch((err) => {
    console.error("failed:", err);
    throw err; // rethrow to still hit finally
  })
  .finally(() => {
    console.log("cleanup always runs");
  });

// ===== async/await try/ catch/ finally
// =======
async function getFirstCharacter() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    console.log("USER:", data.results[0].name);
  } catch (err) {
    console.error("failed:", err);
  } finally {
    console.log("cleanup always runs");
  }
}

getFirstCharacter();

// ======= await
// =======
async function getCharacter() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();
    console.log("User: ", data.results[0].name);

    document.getElementById("row").innerHTML = data.results.map(
      (result) => result.name,
    );
  } catch (e) {
    console.error("failed:", e);
  } finally {
    console.log("cleanup");
  }
}

getCharacter();
