import { ServerOptions } from './types/ServerOptions';

export default {
  secretKey: process.env.SECRET_KEY || 'THISISMYSECURETOKEN',
  host: process.env.HOST || 'http://localhost',
  port: process.env.PORT || '21465',
  deviceName: process.env.DEVICE_NAME || 'WppConnect',
  poweredBy: process.env.POWERED_BY || 'WPPConnect-Server',
  startAllSession: process.env.START_ALL_SESSION === 'true',
  tokenStoreType: process.env.TOKEN_STORE_TYPE || 'file',
  maxListeners: parseInt(process.env.MAX_LISTENERS, 10) || 15,
  customUserDataDir: process.env.CUSTOM_USER_DATA_DIR || './userDataDir/',
  webhook: {
    url: process.env.WEBHOOK_URL || null,
    autoDownload: process.env.WEBHOOK_AUTO_DOWNLOAD === 'true',
    uploadS3: process.env.WEBHOOK_UPLOAD_S3 === 'true',
    readMessage: process.env.WEBHOOK_READ_MESSAGE === 'true',
    allUnreadOnStart: process.env.WEBHOOK_ALL_UNREAD_ON_START === 'true',
    listenAcks: process.env.WEBHOOK_LISTEN_ACKS === 'true',
    onPresenceChanged: process.env.WEBHOOK_ON_PRESENCE_CHANGED === 'true',
    onParticipantsChanged:
      process.env.WEBHOOK_ON_PARTICIPANTS_CHANGED === 'true',
    onReactionMessage: process.env.WEBHOOK_ON_REACTION_MESSAGE === 'true',
    onPollResponse: process.env.WEBHOOK_ON_POLL_RESPONSE === 'true',
    onRevokedMessage: process.env.WEBHOOK_ON_REVOKED_MESSAGE === 'true',
    onLabelUpdated: process.env.WEBHOOK_ON_LABEL_UPDATED === 'true',
    onSelfMessage: process.env.WEBHOOK_ON_SELF_MESSAGE === 'true',
    ignore: process.env.WEBHOOK_IGNORE
      ? process.env.WEBHOOK_IGNORE.split(',')
      : ['status@broadcast'],
  },
  websocket: {
    autoDownload: process.env.WEBSOCKET_AUTO_DOWNLOAD === 'true',
    uploadS3: process.env.WEBSOCKET_UPLOAD_S3 === 'true',
  },
  chatwoot: {
    sendQrCode: process.env.CHATWOOT_SEND_QR_CODE === 'true',
    sendStatus: process.env.CHATWOOT_SEND_STATUS === 'true',
  },
  archive: {
    enable: process.env.ARCHIVE_ENABLE === 'true',
    waitTime: parseInt(process.env.ARCHIVE_WAIT_TIME, 10) || 10,
    daysToArchive: parseInt(process.env.ARCHIVE_DAYS_TO_ARCHIVE, 10) || 45,
  },
  log: {
    level: process.env.LOG_LEVEL || 'silly', // Before open a issue, change level to silly and retry a action
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
    enable: process.env.MAPPER_ENABLE === 'true',
    prefix: process.env.MAPPER_PREFIX || 'tagone-',
  },
  db: {
    mongodbDatabase: process.env.MONGODB_DATABASE || 'tokens',
    mongodbCollection: process.env.MONGODB_COLLECTION || '',
    mongodbUser: process.env.MONGODB_USER || '',
    mongodbPassword: process.env.MONGODB_PASSWORD || '',
    mongodbHost: process.env.MONGODB_HOST || '',
    mongoIsRemote: process.env.MONGO_IS_REMOTE === 'true',
    mongoURLRemote: process.env.MONGO_URL_REMOTE || '',
    mongodbPort: parseInt(process.env.MONGODB_PORT, 10) || 27017,
    redisHost: process.env.REDIS_HOST || 'localhost',
    redisPort: parseInt(process.env.REDIS_PORT, 10) || 6379,
    redisPassword: process.env.REDIS_PASSWORD || '',
    redisDb: parseInt(process.env.REDIS_DB, 10) || 0,
    redisPrefix: process.env.REDIS_PREFIX || 'docker',
  },
  aws_s3: {
    region: (process.env.AWS_REGION as any) || 'sa-east-1',
    access_key_id: process.env.AWS_ACCESS_KEY_ID || null,
    secret_key: process.env.AWS_SECRET_KEY || null,
    defaultBucketName: process.env.AWS_DEFAULT_BUCKET_NAME || null,
    endpoint: process.env.AWS_ENDPOINT || null,
    forcePathStyle: process.env.AWS_FORCE_PATH_STYLE || null,
  },
} as unknown as ServerOptions;
