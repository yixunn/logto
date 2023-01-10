const role_details = {
  back_to_roles: 'Back to Roles', // UNTRANSLATED
  identifier: 'Identifier', // UNTRANSLATED
  delete_description:
    'Doing so will remove the permissions associated with this role from the affected users and delete the mapping between roles, users, and permissions.',
  role_deleted: 'The role {{name}} has been successfully deleted', // UNTRANSLATED
  settings_tab: 'Settings', // UNTRANSLATED
  users_tab: 'Users', // UNTRANSLATED
  permissions_tab: 'Permissions', // UNTRANSLATED
  settings: 'Settings', // UNTRANSLATED
  settings_description:
    'It real sent your at. Amounted all shy set why followed declared. Repeated of endeavor mr position kindness offering ignorant so up. Simplicity are melancholy preference considered saw companions.', // UNTRANSLATED
  field_name: 'Name', // UNTRANSLATED
  field_description: 'Description', // UNTRANSLATED
  permission: {
    assign_button: 'Assign Permission',
    assign_title: 'Assign permission',
    assign_subtitle:
      'Assign permissions to this role. The role will gain the added permissions, and users with this role will inherit these permissions.',
    assign_form_filed: 'Assign permissions',
    search_placeholder: 'Search by API or Permission name',
    added_text: '{{value, number}} permissions added',
    api_permission_count: '{{value, number}} permissions',
    confirm_assign: 'Assign Permission',
    permission_assigned: 'The selected permissions were successfully assigned to this role!',
    deletion_description:
      'If this permission is deleted, the affected user with this role will lose the access granted by this permission.',
    permission_deleted: 'The permission {{name}} has been successfully deleted from this role.', // UNTRANSLATED
  },
  users: {
    assign_button: 'Assign Users',
    name_column: 'User',
    app_column: 'App',
    latest_sign_in_column: 'Latest sign in',
    delete_description:
      'It will remain in your user pool but lose the authorization for this role.',
    deleted: 'The user {{name}} has been successfully deleted from this role.', // UNTRANSLATED
    assign_title: 'Assign users',
    assign_subtitle: 'Assign users to the role',
    assign_users_field: 'Assign users',
    confirm_assign: 'Assign users',
    users_assigned: 'The selected users were successfully assigned to this role!',
  },
};

export default role_details;
