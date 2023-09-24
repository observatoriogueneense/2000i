const stream = require('stream');
const express = require('express');
const multer = require('multer');
const { google } = require('googleapis');

const uploadRouter = express.Router();
const upload = multer();
const GOOGLE_API_FOLDER_ID='1Z1tQILJVhN1ib89GA14s6t5tyFRvlH95'
const autht = new google.auth.GoogleAuth({
  keyFile:'./marianodrive-1a3237887279.json',
  scopes: ['https://www.googleapis.com/auth/drive']
  })


uploadRouter.post('/upload', upload.any(), async (req, res) => {
  try {
    const { body, files } = req;

    for (let f = 0; f < files.length; f += 1) {

        const bufferStream = new stream.PassThrough();
        bufferStream.end(files[f].buffer);
        const { data } = await google.drive({ version: 'v3', auth:autht }).files.create({
          media: {
            mimeType: files[f].mimeType,
            body: bufferStream,
          },
          requestBody: {
            name: files[f].originalname,
            parents: [GOOGLE_API_FOLDER_ID],
          },
          fields: 'id,name',
        });
        
        const newVar = {
          id: data.id,
          url:`https://drive.google.com/uc?export=view&id=${data.id}`
        }
        res.status(200).json(newVar);
    }
  } catch (f) {
    res.send(f.message);
  }
});



// Remove endpoint
uploadRouter.delete('/remove/:fileId', (req, res) => {
  const fileId = req.params.fileId;

  const drive = google.drive({ version: 'v3', auth: autht });

  drive.files.delete({ fileId }, (err) => {
    if (err) {
      console.error('Error removing file from Google Drive:', err);
      return res.status(500).json({ error: 'Error removing file' });
    }

    return res.json({ message: 'File removed successfully' });
  });
});

module.exports = uploadRouter;