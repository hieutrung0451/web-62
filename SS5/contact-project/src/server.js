const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

const contacts = [
  {
    id: "a8fa5bee-cb01-4fb0-8465-e8b820567000",
    name: "Jill Johnson",
    email: "jill@gmail.com",
    phone: "111-111-1111",
    type: "personal",
  },
  {
    id: "770f7bd7-f960-4a9f-be40-67621e415bb6",
    name: "Sara Watson",
    email: "sara@gmail.com",
    phone: "222-222-2222",
    type: "personal",
  },
  {
    id: "f53cc6d7-86f5-460a-9c2c-bbadc0450507",
    name: "Harry White",
    email: "harry@gmail.com",
    phone: "333-333-3333",
    type: "professional",
  },
];

// GET: get all contacts
app.get("/contacts", (req, res) => {
  res.json({
    data: contacts,
    statusCode: 200,
  });
});

// GET: get a contact
app.get("/contacts/:id", (req, res) => {
  const { id } = req.params;
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) {
    return res.json({
      msg: "Contact is not exist",
      data: {},
    });
  }

  res.json({
    data: contact,
    msg: "Successfully",
  });
});

// POST: create new contact
app.post("/contacts", (req, res) => {
  const { name, phone, type, email } = req.body;

  // 1. Validation
  if (!name || !phone || !type || !email) {
    return res.json({
      msg: "Missing required keys",
      statusCode: 400,
    });
  }

  // 2. Does this record exist in DB?
  const isExist = contacts.findIndex((contact) => contact.phone === phone);
  if (isExist !== -1) {
    return res.json({
      msg: "Can not upload contact with this number",
      statusCode: 400,
    });
  }

  const newContact = {
    ...req.body,
    id: uuidv4(),
  };
  contacts.push(newContact);

  res.json({
    msg: "Add new contact successfully",
    data: contacts,
  });
});

// PUT: update a contact
app.put("/contacts/:id", (req, res) => {
  const { id: idParams } = req.params;

  const isExist = contacts.findIndex((item) => item.id === idParams);

  if (isExist < 0) {
    res.status(404).json({
      message: "Not Found",
    });
  } else {
    const newContact = { ...contacts[isExist], ...req.body };
    contacts.splice(isExist, 1, newContact);

    res.json({
      msg: "Add new contact successfully",
      data: contacts,
    });
  }
});

// DELETE: delete a contact
app.delete("/contacts/:id", (req, res) => {
  const { id: idParams } = req.params;

  const isExist = contacts.findIndex((item) => item.id === idParams);

  if (isExist < 0) {
    res.status(404).json({
      message: "Not Found",
    });
  } else {
    contacts.splice(isExist, 1); // change here

    res.json({
      msg: "Delete contact success",
      data: contacts,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
