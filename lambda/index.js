const AWS = require('aws-sdk');
const Sharp = require('sharp');

const S3 = new AWS.SecretsManager({region: 'ap-northeast-2'});

exports.handler = async (event, context, callback) => {
  const Bucket = event.Records[0].s3.bucket.name; // react-nodebird-s3-khlim
  const Key = decodeURIComponent(event.Records[0].s3.object.key); // original/12341234_abc.png
  console.log(Bucket, Key);
  const filename = Key.split('/')[Key.split('/').length - 1];
  const ext = Key.split('.')[Key.split('.').length - 1].toLowerCase();
  const requiredFormat = ext === 'jpg' ? 'jpeg' : ext;
  console.log('filename', filename, 'ext', ext);

  try {
    const s3Object = await S3.getObject({ Bucket, Key }).promise();
    console.log('original', s3Object.Body.length);
    const resizedImage = await Sharp(s3Object.Body)
      .resize(800, 800, { fit: 'inside' })
      .toFormat(requiredFormat)
      .toBuffer();
    await S3
      .putObject({
        Bucket,
        Key: `thumb/${filename}`,
        Body: resizedImage,
      })
      .promise();
    console.log('put ', resizedImage.length);
    return callback(null, `thumb/${filename}`);
  } catch (error) {
    console.error(error);
    return callback(error);
  }
};