import sys
from pathlib import Path
import tiktoken

p = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('file.txt')
if not p.is_absolute():
    p = Path.cwd() / p
if not p.exists():
    print(f"File not found: {p}")
    sys.exit(2)
text = p.read_text(encoding='utf-8')
enc = None
if hasattr(tiktoken, 'encoding_for_model'):
    try:
        enc = tiktoken.encoding_for_model('gpt-4o-mini')
    except Exception:
        enc = None
if enc is None:
    enc = tiktoken.get_encoding('cl100k_base')
print(len(enc.encode(text)))
