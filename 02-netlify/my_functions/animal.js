exports.handler = async function (event, context) {
  let name = event.path.split("/").pop()
  if (name === "meowsalot") {
    return {
      statusCode: 200,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({ name: "Meowsalot", species: "cat", "photo": "https://learnwebcode.github.io/json-example/images/cat-1.jpg", bio: "This cat is great and very vocal. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque." })
    }
  } else if (name === "barksalot") {
    return {
      statusCode: 200,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({ name: "Barksalot", species: "dog", "photo": "https://learnwebcode.github.io/json-example/images/dog-1.jpg", bio: "This dog is very communicative. Deleniti, tempora quis commodi qui inventore ratione rem porro doloribus et obcaecati cumque quibusdam voluptatibus iure nisi aut minima consequuntur, officiis esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit." })
    }
  } else if (name === "purrsloud") {
    return {
      statusCode: 200,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({ name: "Purrsloud", species: "cat", "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg", bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque. Lorem ipsum." })
    }
  } else {
    return {
      statusCode: 404,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({ message: "Animal not found." })
    }
  }
}
