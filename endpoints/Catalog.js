/**
 * DELETE
 */
// 1st Party
const DELETE_POST_ID = "/api/post/{postId}";
const DELETE_SESSION = "/api/session";

/**
 * GETS
 */
// 1st Part
const GET_ACCOUNT_ALL = "/api/account/all";
const GET_ACCOUNT_ID_PAGE = "/api/account/{accountId}/page";
const GET_ACCOUNT_DEFAULT = "/api/account/default";
const GET_ACCOUNT_GET_ME = "/api/account/getMe";
const GET_FEED = "/api/feed/";
const GET_POST_ID = "/api/post/{postId}";
const GET_SESSION = "/api/session";

// 2nd Party
const GET_ANALYTICS_DASHBOARD_WIDGETS = "/api/analytics-dashboard-app/widgets";
const GET_ACADEMY_COURSES = "/api/academy-app/courses";
const GET_ACADEMY_CATEGORIES = "/api/academy-app/categories";
const GET_CALENDAR_EVENTS = "/api/calendar-app/events";
const GET_CHAT = "/api/chat/get-chat";
const GET_CHAT_CONTACTS = "/api/chat/contacts";
const GET_CHAT_USER = "/api/chat/user";
const GET_CONTACTS_USER = "/api/contacts-app/user";
const GET_E_COMMERCE_ORDERS = "/api/e-commerce-app/orders";
const GET_E_COMMERCE_PRODUCT = "/api/e-commerce-app/product";
const GET_FAQ = "/api/faq";
const GET_FILE_MANAGER_FILES = "/api/file-manager-app/files";
const GET_KNOWLEDGE_BASE = "/api/knowledge-base";
const GET_ICONS = "/api/icons";
const GET_MAIL = "'/api/mail-app/mail";
const GET_MAILS = "'/api/mail-app/mails";
const GET_MAIL_FOLDERS = "/api/mail-app/folders";
const GET_MAIL_FILTERS = "/api/mail-app/filters";
const GET_MAIL_LABELS = "/api/mail-app/labels";
const GET_NOTES = "/api/notes-app/notes";
const GET_NOTES_LABELS = "/api/notes-app/labels";
const GET_QUICKPANEL_DATA = "/api/quick-panel/data";
const GET_PROFILE_ABOUT = "/api/profile/about";
const GET_PROFILE_TIMELINE = "/api/profile/timeline";
const GET_PROFILE_PHOTOS_VIDEOS = "/api/profile/photos-videos";
const GET_PROJECT_DASHBOARD_PROJECTS = "/api/project-dashboard-app/projects";
const GET_PROJECT_DASHBOARD_WIDGETS = "/api/project-dashboard-app/widgets";
const GET_SCRUMBOARD_BOARD = "/api/scrumboard-app/board";
const GET_SCRUMBOARD_BOARDS = "/api/scrumboard-app/boards";
const GET_SEARCH = "/api/search";
const GET_TODO = "/api/todo-app/todos";
const GET_TODO_FOLDERS = "/api/todo-app/folders";
const GET_TODO_FILTERS = "/api/todo-app/filters";
const GET_TODO_LABELS = "/api/todo-app/labels";

/**
 * POSTS
 */
// 1st Party
const POST_ACCOUNT_ID_PAGE = "/api/account/{accountId}/page";
const POST_ACCOUNT_NEW = "/api/account/new";
const POST_POST = "/api/post";
const POST_POST_ID_DONATE = "/api/post/{postId}/donate";
const POST_POST_ID_EDIT = "/api/post/{postId}/edit";
const POST_POST_ID_REACT = "/api/post/{postId}/react";
const POST_RUN_QUERY = "/api/runQuery";
const POST_SESSION = "/api/session";

// 2nd Party
const POST_ACADEMY_COURSE_SAVE = "/api/academy-app/course/save";
const POST_ACADEMY_COURSE_UPDATE = "/api/academy-app/course/update";
const POST_AUTH_REGISTER = "/api/auth/register";
const POST_AUTH_USER_UPDATE = "/api/auth/user/update";
const POST_CALENDAR_ADD_EVENT = "/api/calendar-app/add-event";
const POST_CALENDAR_REMOVE_EVENT = "/api/calendar-app/remove-event";
const POST_CALENDAR_UPDATE_EVENT = "/api/calendar-app/update-event";
const POST_CHAT_SEND_MESSAGE = "/api/chat/send-message";
const POST_CHAT_USER_DATA = "/api/chat/user/data";
const POST_CONTACTS_ADD_CONTACT = "/api/contacts-app/add-contact";
const POST_CONTACTS_REMOVE_CONTACT = "/api/contacts-app/remove-contact";
const POST_CONTACTS_REMOVE_CONTACTS = "/api/contacts-app/remove-contacts";
const POST_CONTACTS_TOGGLE_STARRED_CONTACT =
  "/api/contacts-app/toggle-starred-contact";
const POST_CONTACTS_TOGGLE_STARRED_CONTACTS =
  "/api/contacts-app/toggle-starred-contacts";
const POST_CONTACTS_SET_CONTACTS_STARRED =
  "/api/contacts-app/set-contacts-starred";
const POST_CONTACTS_SET_CONTACTS_UNSTARRED =
  "/api/contacts-app/set-contacts-unstarred";
const POST_CONTACTS_UPDATE_CONTACT = "/api/contacts-app/update-contact";
const POST_E_COMMERCE_ORDER_SAVE = "/api/e-commerce-app/order/save";
const POST_E_COMMERCE_PRODUCT_SAVE = "/api/e-commerce-app/product/save";
const POST_MAIL_SET_FOLDER = "/api/mail-app/set-folder";
const POST_MAIL_TOGGLE_LABEL = "/api/mail-app/toggle-label";
const POST_MAIL_UPDATE_MAIL = "/api/mail-app/update-mail";
const POST_NOTES_CREATE_NOTE = "/api/notes-app/create-note";
const POST_NOTES_REMOVE_NOTE = "/api/notes-app/remove-note";
const POST_NOTES_UPDATE_NOTE = "/api/notes-app/update-note";
const POST_NOTES_UPDATE_LABELS = "/api/notes-app/update-labels";
const POST_SCRUMBOARD_CARD_ORDER = "/api/scrumboard-app/card/order";
const POST_SCRUMBOARD_LIST_ORDER = "/api/scrumboard-app/list/order";
const POST_SCRUMBOARD_CARD_NEW = "/api/scrumboard-app/card/new";
const POST_SCRUMBOARD_LIST_NEW = "/api/scrumboard-app/list/new";
const POST_SCRUMBOARD_LIST_RENAME = "/api/scrumboard-app/list/rename";
const POST_SCRUMBOARD_LIST_REMOVE = "/api/scrumboard-app/list/remove";
const POST_SCRUMBOARD_BOARD_DELETE = "/api/scrumboard-app/board/delete";
const POST_SCRUMBOARD_BOARD_RENAME = "/api/scrumboard-app/board/rename";
const POST_SCRUMBOARD_BOARD_SETTINGS_UPDATE =
  "/api/scrumboard-app/board/settings/update";
const POST_SCRUMBOARD_BOARD_NEW = "/api/scrumboard-app/board/new";
const POST_SCRUMBOARD_CARD_REMOVE = "/api/scrumboard-app/card/remove";
const POST_SCRUMBOARD_CARD_UPDATE = "/api/scrumboard-app/card/update";
const POST_TODO_NEW_TODO = "/api/todo-app/new-todo";
const POST_TODO_REMOVE_TODO = "/api/todo-app/remove-todo";
const POST_TODO_UPDATE_TODO = "/api/todo-app/update-todo";

/**
 * PUT
 */
// 1st Party
const PUT_DONATE = "/api/donate";
const PUT_SESSION = "/api/session";

const Const = {
  /**
   * DELETE
   */
  // 1st Party
  DELETE_POST_ID,
  DELETE_SESSION,
  /**
   * GETS
   */
  // 1st Party
  GET_ACCOUNT_ALL,
  GET_ACCOUNT_ID_PAGE,
  GET_ACCOUNT_DEFAULT,
  GET_ACCOUNT_GET_ME,
  GET_FEED,
  GET_POST_ID,
  GET_SESSION,
  // 2nd Party
  ...{
    GET_ANALYTICS_DASHBOARD_WIDGETS,
    GET_ACADEMY_COURSES,
    GET_ACADEMY_CATEGORIES,
    GET_CALENDAR_EVENTS,
    GET_CHAT,
    GET_CHAT_CONTACTS,
    GET_CHAT_USER,
    GET_CONTACTS_USER,
    GET_E_COMMERCE_ORDERS,
    GET_E_COMMERCE_PRODUCT,
    GET_FAQ,
    GET_FILE_MANAGER_FILES,
    GET_KNOWLEDGE_BASE,
    GET_ICONS,
    GET_MAIL,
    GET_MAILS,
    GET_MAIL_FOLDERS,
    GET_MAIL_FILTERS,
    GET_MAIL_LABELS,
    GET_NOTES,
    GET_NOTES_LABELS,
    GET_QUICKPANEL_DATA,
    GET_PROFILE_ABOUT,
    GET_PROFILE_TIMELINE,
    GET_PROFILE_PHOTOS_VIDEOS,
    GET_PROJECT_DASHBOARD_PROJECTS,
    GET_PROJECT_DASHBOARD_WIDGETS,
    GET_SCRUMBOARD_BOARD,
    GET_SCRUMBOARD_BOARDS,
    GET_SEARCH,
    GET_TODO,
    GET_TODO_FOLDERS,
    GET_TODO_FILTERS,
    GET_TODO_LABELS
  },
  /**
   * POSTS
   */
  // 1st Party
  POST_ACCOUNT_ID_PAGE,
  POST_ACCOUNT_NEW,
  POST_POST,
  POST_POST_ID_DONATE,
  POST_POST_ID_EDIT,
  POST_POST_ID_REACT,
  POST_SESSION,
  POST_RUN_QUERY,
  // 2nd Party
  ...{
    POST_ACADEMY_COURSE_SAVE,
    POST_ACADEMY_COURSE_UPDATE,
    POST_AUTH_REGISTER,
    POST_AUTH_USER_UPDATE,
    POST_CALENDAR_ADD_EVENT,
    POST_CALENDAR_REMOVE_EVENT,
    POST_CALENDAR_UPDATE_EVENT,
    POST_CHAT_SEND_MESSAGE,
    POST_CHAT_USER_DATA,
    POST_CONTACTS_ADD_CONTACT,
    POST_CONTACTS_REMOVE_CONTACT,
    POST_CONTACTS_REMOVE_CONTACTS,
    POST_CONTACTS_TOGGLE_STARRED_CONTACT,
    POST_CONTACTS_TOGGLE_STARRED_CONTACTS,
    POST_CONTACTS_SET_CONTACTS_STARRED,
    POST_CONTACTS_SET_CONTACTS_UNSTARRED,
    POST_CONTACTS_UPDATE_CONTACT,
    POST_E_COMMERCE_ORDER_SAVE,
    POST_E_COMMERCE_PRODUCT_SAVE,
    POST_MAIL_SET_FOLDER,
    POST_MAIL_TOGGLE_LABEL,
    POST_MAIL_UPDATE_MAIL,
    POST_NOTES_CREATE_NOTE,
    POST_NOTES_REMOVE_NOTE,
    POST_NOTES_UPDATE_NOTE,
    POST_NOTES_UPDATE_LABELS,
    POST_SCRUMBOARD_CARD_ORDER,
    POST_SCRUMBOARD_LIST_ORDER,
    POST_SCRUMBOARD_CARD_NEW,
    POST_SCRUMBOARD_LIST_NEW,
    POST_SCRUMBOARD_LIST_RENAME,
    POST_SCRUMBOARD_LIST_REMOVE,
    POST_SCRUMBOARD_BOARD_DELETE,
    POST_SCRUMBOARD_BOARD_RENAME,
    POST_SCRUMBOARD_BOARD_SETTINGS_UPDATE,
    POST_SCRUMBOARD_BOARD_NEW,
    POST_SCRUMBOARD_CARD_REMOVE,
    POST_SCRUMBOARD_CARD_UPDATE,
    POST_TODO_NEW_TODO,
    POST_TODO_REMOVE_TODO,
    POST_TODO_UPDATE_TODO
  },

  /**
   * PUT
   */
  // 1st Party
  PUT_DONATE,
  PUT_SESSION
};
const Categories = {
  // 1st Party
  Account: {
    GET_ALL: GET_ACCOUNT_ALL,
    GET_ID_PAGE: GET_ACCOUNT_ID_PAGE,
    GET_DEFAULT: GET_ACCOUNT_DEFAULT,
    GET_ME: GET_ACCOUNT_GET_ME,
    POST_ID_PAGE: POST_ACCOUNT_ID_PAGE,
    POST_NEW: POST_ACCOUNT_NEW
  },
  Feed: {
    GET: GET_FEED
  },
  Post: {
    DELETE_ID: DELETE_POST_ID,
    GET_ID: GET_POST_ID,
    POST: POST_POST,
    POST_ID_EDIT: POST_POST_ID_EDIT,
    POST_ID_REACT: POST_POST_ID_REACT,
    POST_ID_DONATE: POST_POST_ID_DONATE
  },
  RunQuery: {
    POST: POST_RUN_QUERY
  },
  Session: {
    DELETE: DELETE_SESSION,
    GET: GET_SESSION,
    POST: POST_SESSION,
    PUT: PUT_SESSION
  },
  // 2nd Party
  ...{
    AnalyticsDashboard: {
      GET_WIDGETS: GET_ANALYTICS_DASHBOARD_WIDGETS
    },
    Academy: {
      GET_COURSES: GET_ACADEMY_COURSES,
      GET_CATEGORIES: GET_ACADEMY_CATEGORIES,
      POST_COURSE_SAVE: POST_ACADEMY_COURSE_SAVE,
      POST_COURSE_UPDATE: POST_ACADEMY_COURSE_UPDATE
    },
    Auth: {
      POST_REGISTER: POST_AUTH_REGISTER,
      POST_USER_UPDATE: POST_AUTH_USER_UPDATE
    },
    Calendar: {
      GET_EVENTS: GET_CALENDAR_EVENTS,
      POST_ADD_EVENT: POST_CALENDAR_ADD_EVENT,
      POST_REMOVE_EVENT: POST_CALENDAR_REMOVE_EVENT,
      POST_UPDATE_EVENT: POST_CALENDAR_UPDATE_EVENT
    },
    Chat: {
      GET: GET_CHAT,
      GET_CONTACTS: GET_CHAT_CONTACTS,
      GET_USER: GET_CHAT_USER,
      POST_SEND_MESSAGE: POST_CHAT_SEND_MESSAGE,
      POST_USER_DATA: POST_CHAT_USER_DATA
    },
    Contacts: {
      GET_USER: GET_CONTACTS_USER,
      POST_ADD_CONTACT: POST_CONTACTS_ADD_CONTACT,
      POST_REMOVE_CONTACT: POST_CONTACTS_REMOVE_CONTACT,
      POST_REMOVE_CONTACTS: POST_CONTACTS_REMOVE_CONTACTS,
      POST_TOGGLE_STARRED_CONTACT: POST_CONTACTS_TOGGLE_STARRED_CONTACT,
      POST_TOGGLE_STARRED_CONTACTS: POST_CONTACTS_TOGGLE_STARRED_CONTACTS,
      POST_SET_CONTACTS_STARRED: POST_CONTACTS_SET_CONTACTS_STARRED,
      POST_SET_CONTACTS_UNSTARRED: POST_CONTACTS_SET_CONTACTS_UNSTARRED,
      POST_UPDATE_CONTACT: POST_CONTACTS_UPDATE_CONTACT
    },
    Donate: {
      PUT: PUT_DONATE
    },
    ECommerce: {
      GET_ORDERS: GET_E_COMMERCE_ORDERS,
      GET_PRODUCT: GET_E_COMMERCE_PRODUCT,
      POST_ORDER_SAVE: POST_E_COMMERCE_ORDER_SAVE,
      POST_PRODUCT_SAVE: POST_E_COMMERCE_PRODUCT_SAVE
    },
    Faq: {
      GET: GET_FAQ
    },
    FileManager: {
      GET_FILES: GET_FILE_MANAGER_FILES
    },
    KnowledgeBase: {
      GET: GET_KNOWLEDGE_BASE
    },
    Icons: {
      GET: GET_ICONS
    },
    Mail: {
      GET: GET_MAIL,
      GETS: GET_MAILS,
      GET_FOLDERS: GET_MAIL_FOLDERS,
      GET_FILTERS: GET_MAIL_FILTERS,
      GET_LABELS: GET_MAIL_LABELS,
      POST_SET_FOLDER: POST_MAIL_SET_FOLDER,
      POST_TOGGLE_LABEL: POST_MAIL_TOGGLE_LABEL,
      POST_UPDATE_MAIL: POST_MAIL_UPDATE_MAIL
    },
    Notes: {
      GET: GET_NOTES,
      GET_LABELS: GET_NOTES_LABELS,
      POST_CREATE_NOTE: POST_NOTES_CREATE_NOTE,
      POST_REMOVE_NOTE: POST_NOTES_REMOVE_NOTE,
      POST_UPDATE_NOTE: POST_NOTES_UPDATE_NOTE,
      POST_UPDATE_LABELS: POST_NOTES_UPDATE_LABELS
    },
    QuickPanel: {
      GET_DATA: GET_QUICKPANEL_DATA
    },
    Profile: {
      GET_ABOUT: GET_PROFILE_ABOUT,
      GET_TIMELINE: GET_PROFILE_TIMELINE,
      GET_PHOTOS_VIDEOS: GET_PROFILE_PHOTOS_VIDEOS
    },
    ProjectDashboard: {
      GET_PROJECTS: GET_PROJECT_DASHBOARD_PROJECTS,
      GET_WIDGETS: GET_PROJECT_DASHBOARD_WIDGETS
    },
    Scrumboard: {
      GET_BOARD: GET_SCRUMBOARD_BOARD,
      GET_BOARDS: GET_SCRUMBOARD_BOARDS,
      POST_CARD_ORDER: POST_SCRUMBOARD_CARD_ORDER,
      POST_LIST_ORDER: POST_SCRUMBOARD_LIST_ORDER,
      POST_CARD_NEW: POST_SCRUMBOARD_CARD_NEW,
      POST_LIST_NEW: POST_SCRUMBOARD_LIST_NEW,
      POST_LIST_RENAME: POST_SCRUMBOARD_LIST_RENAME,
      POST_LIST_REMOVE: POST_SCRUMBOARD_LIST_REMOVE,
      POST_BOARD_DELETE: POST_SCRUMBOARD_BOARD_DELETE,
      POST_BOARD_RENAME: POST_SCRUMBOARD_BOARD_RENAME,
      POST_BOARD_SETTINGS_UPDATE: POST_SCRUMBOARD_BOARD_SETTINGS_UPDATE,
      POST_BOARD_NEW: POST_SCRUMBOARD_BOARD_NEW,
      POST_CARD_REMOVE: POST_SCRUMBOARD_CARD_REMOVE,
      POST_CARD_UPDATE: POST_SCRUMBOARD_CARD_UPDATE
    },
    Search: {
      GET: GET_SEARCH
    },
    Todo: {
      GET: GET_TODO,
      GET_FOLDERS: GET_TODO_FOLDERS,
      GET_FILTERS: GET_TODO_FILTERS,
      GET_LABELS: GET_TODO_LABELS,
      POST_NEW_TODO: POST_TODO_NEW_TODO,
      POST_REMOVE_TODO: POST_TODO_REMOVE_TODO,
      POST_UPDATE_TODO: POST_TODO_UPDATE_TODO
    }
  }
};

export default { Categories, Const };
