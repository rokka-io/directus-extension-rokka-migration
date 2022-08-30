"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const ROKKA_HASH_FIELD_NAME = 'rokka_hash';
async function up(knex) {
    await knex.schema.alterTable('directus_files', (table) => {
        table.string(ROKKA_HASH_FIELD_NAME);
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.alterTable('directus_files', (table) => {
        table.dropColumn(ROKKA_HASH_FIELD_NAME);
    });
}
exports.down = down;
