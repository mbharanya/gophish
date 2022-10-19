-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
ALTER TABLE `pages` ADD COLUMN second_step_html TEXT;