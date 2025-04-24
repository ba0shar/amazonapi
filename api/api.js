
// Sample Amazon Pay API Handler
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, currency } = req.body;
    // Simulate payment response
    res.status(200).json({ status: 'success', message: `Charged ${amount} ${currency}` });
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}
