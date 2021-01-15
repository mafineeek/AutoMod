-- Update "verifications" table, fix all the VARCHARs
ALTER TABLE verifications
ALTER COLUMN id TYPE TEXT USING CAST(id AS TEXT),
ALTER COLUMN serverId TYPE BIGINT USING CAST(serverId AS BIGINT),
ALTER COLUMN command TYPE TEXT USING CAST(command AS TEXT),
ALTER COLUMN message TYPE TEXT USING CAST(message AS TEXT),
ALTER COLUMN failedMessage TYPE TEXT USING CAST(failedMessage AS TEXT),
ALTER COLUMN messageRegex TYPE TEXT USING CAST(messageRegex AS TEXT),
ALTER COLUMN successRoles TYPE BIGINT[] USING CAST(successRoles AS BIGINT[]),
ALTER COLUMN failedRoles TYPE BIGINT[] USING CAST(failedRoles AS BIGINT[]),
ALTER COLUMN announceChannel TYPE BIGINT USING CAST(announceChannel AS BIGINT),
ALTER COLUMN allowedchannels TYPE BIGINT[] USING CAST(allowedchannels AS BIGINT[]);