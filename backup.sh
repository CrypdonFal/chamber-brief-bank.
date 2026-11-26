#!/bin/bash

# Chamber Brief Bank - Automated Backup Script
BACKUP_DIR="../chamber_brief_bank_backups"
SOURCE_DIR="."
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m'

# Prompt for backup label
read -p "Enter backup label (e.g., v0.1.0-hero-ui): " BACKUP_NAME
if [ -z "$BACKUP_NAME" ]; then
    BACKUP_NAME="unnamed"
fi
BACKUP_NAME=$(echo "$BACKUP_NAME" | tr ' ' '_')

TARGET_FOLDER="$BACKUP_DIR/backup_${TIMESTAMP}_${BACKUP_NAME}"
mkdir -p "$TARGET_FOLDER"

echo -e "${GREEN}Starting Chamber Brief Bank backup...${NC}"

# Copy project files (excluding heavy/generated folders)
rsync -av --delete \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude 'dist' \
    --exclude '.next' \
    "$SOURCE_DIR/" "$TARGET_FOLDER/"

# Generate restoration guide
cat << EOF > "$TARGET_FOLDER/BACKUP_INFO.md"
# Chamber Brief Bank Backup Info
- **Backup Date:** $(date)
- **Label:** ${BACKUP_NAME}
- **Timestamp:** ${TIMESTAMP}

## Restoration Steps
1. Copy files back to working directory.
2. Run \`npm install\` to restore node_modules.
3. Refer to \`docs/PRD.md\` for Supabase schema restoration.
EOF

echo -e "${GREEN}Backup successfully saved to: ${TARGET_FOLDER}${NC}"