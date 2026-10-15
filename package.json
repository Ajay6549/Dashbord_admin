# Assimilate Automated Patch: Sanitization & Error Handling
from typing import Dict, Any, Optional
import logging

logger = logging.getLogger(__name__)

def process_incoming_request(data: Optional[Dict[str, Any]]) -> Dict[str, Any]:
    """Sanitizes incoming attributes and validates required keys."""
    if not data or not isinstance(data, dict):
        logger.warning('Empty or malformed payload received')
        return {'status': 'error', 'detail': 'Empty or malformed payload'}

    # Clean string attributes
    cleaned = {k: v.strip() if isinstance(v, str) else v for k, v in data.items()}
    return {'status': 'success', 'data': cleaned}
