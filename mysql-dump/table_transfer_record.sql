CREATE TABLE `transfer_record` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `acc_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `acc_type` int DEFAULT '0',
  `action_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `result_hash` varchar(255) COLLATE utf8mb4_unicode_ci NULL,
  `explain_txt` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `acc_address_and_acc_type_and_action_name` (`acc_address`, `acc_type`, `action_name`),
  KEY(`acc_address`),
  KEY(`acc_type`),
  KEY(`action_name`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;