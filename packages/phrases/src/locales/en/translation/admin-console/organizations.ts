const organization = {
  page_title: 'Organizations',
  title: 'Organizations',
  subtitle:
    'Represent the teams, business customers, and partner companies that access your applications as organizations.',
  organization_id: 'Organization ID',
  members: 'Members',
  create_organization: 'Create organization',
  organization_name_placeholder: 'My organization',
  organization_description_placeholder: 'A brief description of the organization.',
  access_control: 'Access control',
  access_control_description:
    'Authorization in a multi-tenancy applications is often designed to make sure that tenant isolation is maintained throughout an application and that tenants can access only their own resources.',
  organization_permission: 'Organization permission',
  organization_permission_other: 'Organization permissions',
  organization_permission_delete_confirm:
    'If this permission is deleted, all organization roles including this permission will lose this permission, and users who had this permission will lose the access granted by it.',
  create_permission_placeholder: 'Read appointment history.',
  permission: 'Permission',
  permission_other: 'Permissions',
  organization_role: 'Organization role',
  organization_role_other: 'Organization roles',
  organization_role_delete_confirm:
    'Doing so will remove the permissions associated with this role from the affected users and delete the relations among organization roles, members in the organization, and organization permissions.',
  role: 'Role',
  create_role_placeholder: 'Users with view-only permissions.',
  search_permission_placeholder: 'Type to search for permissions',
};

export default Object.freeze(organization);
