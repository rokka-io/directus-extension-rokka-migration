import { Knex } from 'knex';

const TABLE_NAME = 'directus_files';
const COLUMN_NAME = 'rokka_hash';

export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable(TABLE_NAME, (table) => {
		table.string(COLUMN_NAME);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable(TABLE_NAME, (table) => {
		table.dropColumn(COLUMN_NAME);
	});
}
