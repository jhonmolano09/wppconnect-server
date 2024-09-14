import { ServerOptions } from './types/ServerOptions';
function getEnvVar(variable: string | undefined, defaultValue: string): string {
  return variable !== undefined && variable !== null ? variable : defaultValue;
}
export default {
  secretKey: getEnvVar(process.env.SECRET_KEY, 'THISISMYSECURETOKEN'),
  host: getEnvVar(process.env.HOST, 'http://localhost'),
  port: getEnvVar(process.env.PORT, '21465'),
  deviceName: getEnvVar(process.env.DEVICE_NAME, 'WppConnect'),
  poweredBy: getEnvVar(process.env.POWERED_BY, 'WPPConnect-Server'),
  startAllSession: getEnvVar(process.env.START_ALL_SESSION, 'false') === 'true',
  tokenStoreType: getEnvVar(process.env.TOKEN_STORE_TYPE, 'file'),
  maxListeners: parseInt(getEnvVar(process.env.MAX_LISTENERS, '15'), 10),
  customUserDataDir: getEnvVar(
    process.env.CUSTOM_USER_DATA_DIR,
    './userDataDir/',
  ),
  webhook: {
    url: getEnvVar(process.env.WEBHOOK_URL, ''),
    autoDownload:
      getEnvVar(process.env.WEBHOOK_AUTO_DOWNLOAD, 'false') === 'true',
    uploadS3: getEnvVar(process.env.WEBHOOK_UPLOAD_S3, 'false') === 'true',
    readMessage:
      getEnvVar(process.env.WEBHOOK_READ_MESSAGE, 'false') === 'true',
    allUnreadOnStart:
      getEnvVar(process.env.WEBHOOK_ALL_UNREAD_ON_START, 'false') === 'true',
    listenAcks: getEnvVar(process.env.WEBHOOK_LISTEN_ACKS, 'false') === 'true',
    onPresenceChanged:
      getEnvVar(process.env.WEBHOOK_ON_PRESENCE_CHANGED, 'false') === 'true',
    onParticipantsChanged:
      getEnvVar(process.env.WEBHOOK_ON_PARTICIPANTS_CHANGED, 'false') ===
      'true',
    onReactionMessage:
      getEnvVar(process.env.WEBHOOK_ON_REACTION_MESSAGE, 'false') === 'true',
    onPollResponse:
      getEnvVar(process.env.WEBHOOK_ON_POLL_RESPONSE, 'false') === 'true',
    onRevokedMessage:
      getEnvVar(process.env.WEBHOOK_ON_REVOKED_MESSAGE, 'false') === 'true',
    onLabelUpdated:
      getEnvVar(process.env.WEBHOOK_ON_LABEL_UPDATED, 'false') === 'true',
    onSelfMessage:
      getEnvVar(process.env.WEBHOOK_ON_SELF_MESSAGE, 'false') === 'true',
    ignore: process.env.WEBHOOK_IGNORE
      ? process.env.WEBHOOK_IGNORE.split(',')
      : ['status@broadcast'],
  },
  websocket: {
    autoDownload:
      getEnvVar(process.env.WEBSOCKET_AUTO_DOWNLOAD, 'false') === 'true',
    uploadS3: getEnvVar(process.env.WEBSOCKET_UPLOAD_S3, 'false') === 'true',
  },
  chatwoot: {
    sendQrCode:
      getEnvVar(process.env.CHATWOOT_SEND_QR_CODE, 'false') === 'true',
    sendStatus: getEnvVar(process.env.CHATWOOT_SEND_STATUS, 'false') === 'true',
  },
  archive: {
    enable: getEnvVar(process.env.ARCHIVE_ENABLE, 'false') === 'true',
    waitTime: parseInt(getEnvVar(process.env.ARCHIVE_WAIT_TIME, '10'), 10),
    daysToArchive: parseInt(
      getEnvVar(process.env.ARCHIVE_DAYS_TO_ARCHIVE, '45'),
      10,
    ),
  },
  log: {
    level: getEnvVar(process.env.LOG_LEVEL, 'silly'), // Before open a issue, change level to silly and retry a action
    logger: process.env.LOGGER
      ? process.env.LOGGER.split(',')
      : ['console', 'file'],
  },
  createOptions: {
    browserArgs: [
      '--disable-web-security',
      '--no-sandbox',
      '--disable-web-security',
      '--aggressive-cache-discard',
      '--disable-cache',
      '--disable-application-cache',
      '--disable-offline-load-stale-cache',
      '--disk-cache-size=0',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync',
      '--disable-translate',
      '--hide-scrollbars',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
      '--ignore-certificate-errors',
      '--ignore-ssl-errors',
      '--ignore-certificate-errors-spki-list',
    ],
    /**
     * Example of configuring the linkPreview generator
     * If you set this to 'null', it will use global servers; however, you have the option to define your own server
     * Clone the repository https://github.com/wppconnect-team/wa-js-api-server and host it on your server with ssl
     *
     * Configure the attribute as follows:
     * linkPreviewApiServers: [ 'https://www.yourserver.com/wa-js-api-server' ]
     */
    linkPreviewApiServers: process.env.LINK_PREVIEW_API_SERVERS
      ? process.env.LINK_PREVIEW_API_SERVERS.split(',')
      : null,
  },
  mapper: {
    enable: getEnvVar(process.env.MAPPER_ENABLE, 'false') === 'true',
    prefix: getEnvVar(process.env.MAPPER_PREFIX, 'tagone-'),
  },
  db: {
    mongodbDatabase: getEnvVar(process.env.MONGODB_DATABASE, 'tokens'),
    mongodbCollection: getEnvVar(process.env.MONGODB_COLLECTION, ''),
    mongodbUser: getEnvVar(process.env.MONGODB_USER, ''),
    mongodbPassword: getEnvVar(process.env.MONGODB_PASSWORD, ''),
    mongodbHost: getEnvVar(process.env.MONGODB_HOST, ''),
    mongoIsRemote: getEnvVar(process.env.MONGO_IS_REMOTE, 'false') === 'true',
    mongoURLRemote: getEnvVar(process.env.MONGO_URL_REMOTE, ''),
    mongodbPort: parseInt(getEnvVar(process.env.MONGODB_PORT, '27017'), 10),
    redisHost: getEnvVar(process.env.REDIS_HOST, 'localhost'),
    redisPort: parseInt(getEnvVar(process.env.REDIS_PORT, '6379'), 10),
    redisPassword: getEnvVar(process.env.REDIS_PASSWORD, ''),
    redisDb: parseInt(getEnvVar(process.env.REDIS_DB, '0'), 10),
    redisPrefix: getEnvVar(process.env.REDIS_PREFIX, 'docker'),
  },
  aws_s3: {
    region: getEnvVar(process.env.AWS_REGION, 'sa-east-1'),
    access_key_id: getEnvVar(process.env.AWS_ACCESS_KEY_ID, ''),
    secret_key: getEnvVar(process.env.AWS_SECRET_KEY, ''),
    defaultBucketName: getEnvVar(process.env.AWS_DEFAULT_BUCKET_NAME, ''),
    endpoint: getEnvVar(process.env.AWS_ENDPOINT, ''),
    forcePathStyle: getEnvVar(process.env.AWS_FORCE_PATH_STYLE, ''),
  },
} as unknown as ServerOptions;
