import { Knex } from 'knex';

const ROKKA_HASH_COLUMN_NAME = 'rokka_hash';

export async function up(knex: Knex): Promise<void> {
	// Only create column if not already exists
	if (!(await knex.schema.hasColumn('directus_files', ROKKA_HASH_COLUMN_NAME))) {
		await knex.schema.alterTable('directus_files', (table) => {
			table.string(ROKKA_HASH_COLUMN_NAME);
		});
	}
}

export async function down(knex: Knex): Promise<void> {
	// Only drop column if exists
	if (await knex.schema.hasColumn('directus_files', ROKKA_HASH_COLUMN_NAME)) {
		await knex.schema.alterTable('directus_files', (table) => {
			table.dropColumn(ROKKA_HASH_COLUMN_NAME);
		});
	}
}
