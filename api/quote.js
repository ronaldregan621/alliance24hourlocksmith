export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, service, page } = req.body;

  if (!name || !phone || !service) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('SLACK_WEBHOOK_URL not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const message = {
    text: `:rotating_light: New Quote Request — ${name} | ${phone} | ${service}`,
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: '🔑 New Quote Request', emoji: true }
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Name:*\n${name}` },
          { type: 'mrkdwn', text: `*Phone:*\n${phone}` },
          { type: 'mrkdwn', text: `*Service Needed:*\n${service}` },
          { type: 'mrkdwn', text: `*From Page:*\n${page || 'Homepage'}` }
        ]
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `📞 *Call back:* ${phone}` }
      }
    ]
  };

  try {
    const slackRes = await fetch(webhookUrl.trim(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });

    const slackBody = await slackRes.text();
    console.log('Slack status:', slackRes.status, 'body:', slackBody);

    if (!slackRes.ok) {
      throw new Error(`Slack responded with ${slackRes.status}: ${slackBody}`);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Slack error:', err.message);
    return res.status(500).json({ error: 'Failed to send to Slack', detail: err.message });
  }
}
