
import { AutomationTemplate } from '@/types/automation';
import { customerServiceTemplates } from './templates/customerServiceTemplates';
import { productivityTemplates } from './templates/productivityTemplates';
import { salesTemplates } from './templates/salesTemplates';
import { marketingTemplates } from './templates/marketingTemplates';
import { operationsTemplates } from './templates/operationsTemplates';
import { businessTemplates } from './templates/businessTemplates';
import { saasTemplates } from './templates/saasTemplates';

// Re-export the AutomationTemplate type for backward compatibility
export type { AutomationTemplate };

// Export all constants from the constants file
export { 
  toolsOptions, 
  categoriesOptions, 
  difficultyOptions, 
  purposeOptions 
} from './constants/automationConstants';

// Combine all templates
export const automationTemplates: AutomationTemplate[] = [
  ...customerServiceTemplates,
  ...productivityTemplates,
  ...salesTemplates,
  ...marketingTemplates,
  ...operationsTemplates,
  ...businessTemplates,
  ...saasTemplates
];
