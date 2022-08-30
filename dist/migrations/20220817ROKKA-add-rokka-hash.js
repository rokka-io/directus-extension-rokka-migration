"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const ROKKA_HASH_COLUMN_NAME = 'rokka_hash';
async function up(knex) {
    // Only create column if not already exists
    if (!(await knex.schema.hasColumn('directus_files', ROKKA_HASH_COLUMN_NAME))) {
        await knex.schema.alterTable('directus_files', (table) => {
            table.string(ROKKA_HASH_COLUMN_NAME);
        });
    }
}
exports.up = up;
async function down(knex) {
    // Only drop column if exists
    if (await knex.schema.hasColumn('directus_files', ROKKA_HASH_COLUMN_NAME)) {
        await knex.schema.alterTable('directus_files', (table) => {
            table.dropColumn(ROKKA_HASH_COLUMN_NAME);
        });
    }
}
exports.down = down;
