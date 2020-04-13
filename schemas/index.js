let AccountDBON = require("./account-db/account.db.json");
let AnalyticsDashboardDBON = require("./analytics-dashboard-db/analytics-dashboard.db.json");
let AuthDBON = require("./auth-db/auth.db.json");
let CalendarDBON = require("./calendar-db/calendar.db.json");
let ChatDBON = require("./chat-db/chat.db.json");
let ContactsDBON = require("./contacts-db/contacts.db.json");
let CreditCardDBON = require("./credit-card-db/credit-card.db.json");
let ECommerceDBON = require("./e-commerce-db/e-commerce.db.json");
let FaqDBON = require("./faq-db/faq.db.json");
let FileManagerDBON = require("./file-manager-db/file-manager.db.json");
let IconsDBON = require("./icons-db/icons.db.json");
let InvoiceDBON = require("./invoice-db/invoice.db.json");
let KnowledgeBaseDBON = require("./knowledge-base-db/knowledge-base.db.json");
let MailDBON = require("./mail-db/mail.db.json");
let NotesDBON = require("./notes-db/notes.db.json");
let ProfileDBON = require("./profile-db/profile.db.json");
let QuickPanelDBON = require("./quick-panel-db/quick-panel.db.json");
let ScrumboardDBON = require("./scrumboard-db/scrumboard.db.json");
let SearchDBON = require("./search-db/search.db.json");
let SessionDBON = require("./session-db/session.db.json");
let TodoDBON = require("./todo-db/todo.db.json");

let Schema = require("./db-json-schema.json");

module.exports = {
  "account-db/account": AccountDBON,
  "analytics-dashboard-db/analytics-dashboard": AnalyticsDashboardDBON,
  "auth-db/auth": AuthDBON,
  "calendar-db/calendar": CalendarDBON,
  "chat-db/chat": ChatDBON,
  "contacts-db/contacts": ContactsDBON,
  "credit-card-db/credit-card": CreditCardDBON,
  "e-commerce-db/e-commerce": ECommerceDBON,
  "faq-db/faq": FaqDBON,
  "file-manager-db/file-manager": FileManagerDBON,
  "icons-db/icons": IconsDBON,
  "invoice-db/invoice": InvoiceDBON,
  "knowledge-base-db/knowledge-base": KnowledgeBaseDBON,
  "mail-db/mail": MailDBON,
  "notes-db/notes": NotesDBON,
  "profile-db/profile": ProfileDBON,
  "quick-panel-db/quick-panel": QuickPanelDBON,
  "scrumboard-db/scrumboard": ScrumboardDBON,
  "search-db/search": SearchDBON,
  "session-db/session": SessionDBON,
  "todo-db/todo": TodoDBON,
  Schema,
};
