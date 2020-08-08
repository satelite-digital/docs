const { findParentTest, addChildTest } = require('./helpers')
const { fetchFilesTest, parseCommentsTest, createTreeTest  } = require('./core')

const integrationTest = require('./integration.spec.js');


// Helpers
findParentTest();
addChildTest();

// Core
fetchFilesTest();
parseCommentsTest();
createTreeTest();

// Integration
integrationTest();