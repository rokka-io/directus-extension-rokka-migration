import { Knex } from 'knex';

const ROKKA_HASH_FIELD_NAME = 'rokka_hash';

export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable('directus_files', (table) => {
		table.string(ROKKA_HASH_FIELD_NAME);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('directus_files', (table) => {
		table.dropColumn(ROKKA_HASH_FIELD_NAME);
	});
}
